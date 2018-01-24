// this nodejs script queries the stash api and looks at weapon mods
// to discern the mods' sort order by making note of naturally occuring
// mods and how they're ordered.
// after having looked at thousands of weapons, data.json contains a
// pretty complete set of weapon mods in their proper sorting order.

var http = require('http');
var fs = require('fs');

var dataStore;
data = fs.readFileSync('data.json', 'utf8');
try{
	dataStore = JSON.parse(data);
} catch(e){
	dataStore = {
		mods: []
	};
}

// save backup
fs.writeFileSync('data' + Date.now() + '.json', JSON.stringify(dataStore, null, 2));

// reset - uncomment this to start over
// dataStore = {mods:[], id:null};

fetch(dataStore.id);

function save(){
	fs.writeFileSync('data.json', JSON.stringify(dataStore, null, 2));
}

function fetch(id){
	var url;
	console.log("\n\tfetching id " + id + "\n");
	if(!id){
		url = 'http://api.pathofexile.com/public-stash-tabs';
	} else {
		url = 'http://api.pathofexile.com/public-stash-tabs?id=' + id;
	}
	http.get(url, function(res){
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			body = JSON.parse(body);
			process(body, id);
		});
	});
}

function insertWithCare(mod, z, mods){
	if(dataStore.mods.indexOf(mod) !== -1){
		return;
	}
	// check other mods before mod
	var minimumPosition = 0;
	for(var x = 0; x < z; x++){
		minimumPosition = Math.max(minimumPosition, dataStore.mods.indexOf(mods[x]));
	}
	minimumPosition += 1;
	dataStore.mods.splice(minimumPosition, 0, mod);
}
function reorderWithCare(mod, z, mods){
	if(dataStore.mods.indexOf(mod) === -1){
		return;
	}

	var modIndex = dataStore.mods.indexOf(mod);
	console.log(mod + ' is at ' + modIndex);


	// check other mods after mod
	console.log('These should come later:');
	for(var x = mods.length - 1; x > z; x--){
		var laterModIndex = dataStore.mods.indexOf(mods[x]);
		console.log(mods[x] + ' is at ' + laterModIndex);

		if(laterModIndex !== -1 && laterModIndex < modIndex){
			dataStore.mods.splice(laterModIndex, 0, dataStore.mods.splice(modIndex, 1)[0]);
			modIndex = dataStore.mods.indexOf(mod);
			console.log('  moving ' + mod + ' to before ' + mods[x]);
		}
	}

	console.log("\n");
}

function processMods(mods){
	console.log('-');
	mods = mods.map(function(item){
		return item.replace(/\d+/g, '#');
	});
	for(var z = 0; z < mods.length; z++){
		var mod = mods[z];
		if(dataStore.mods.indexOf(mod) === -1) {
			// insertWithCare(mod, z, mods);
			dataStore.mods.push(mod);
		}
		reorderWithCare(mod, z, mods);
	}
}

function process(body, id){
	var next = body.next_change_id;
	for(var x = 0; x < body.stashes.length; x++){
		var stash = body.stashes[x];
		var items = stash.items;
		for(var y = 0; y < items.length; y++){
			var item = items[y];
			if(item.category
				&& item.category.weapons
				//&& item.category.weapons.indexOf('sceptre') !== -1
				&& item.identified
				&& item.frameType < 3
				&& item.frameType > 0
				&& item.explicitMods){
				processMods(item.explicitMods);
				save();
			}
		}
	}
	if(next !== id){
		dataStore.id = next;
		fetch(next);
	}
}