data = [];
a = document.getElementById('a').value.split("\n")
var mod='';
for(x=0;x<a.length;x++){
	l = a[x];
	if(l===''){
		continue;
	}
	if(l[0] !== 'T'){
		mod=l;
	} else {
		data.push([mod].concat(l.split(/\t/)));
	}
}