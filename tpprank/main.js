if(location.hostname == 'nubleh.github.io'){
	var dr = document.referrer;
	if(dr.length && !dr.match(/^http:\/\/nubleh.github.io/)){
		ga('send', 'event', 'referrer', dr);
	}
}
bar_width = 100/data.length;
style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.innerHTML = '#chart .bar{width:' + bar_width + '%;}'
document.body.appendChild(style);

chart = document.getElementById('chart');
for(x=0;x<data.length;x++){
	bar = document.createElement('div');
	bar.classList.add('bar');
	chart.appendChild(bar);
	bar_html = '';
	
	data_p = data[x];
	for(rank in data_p){
		if(rank == 'totalSectionLv'){
			level = data_p[rank];
		} else {
			bar_html += '<div class="part ' + rank + '-rank" style="height:' + data_p[rank] + '%" data-rank="' + rank + '" data-chance="' + data_p[rank] + '" data-level="' + level + '"></div>';
		}
	}
	if(x%7 == 0){
		bar_html += '<div class="x-label">' + level + '</div>'
	}
	bar.innerHTML = bar_html;
}

tooltip = document.getElementById('tooltip');
chart.onmousemove = function(e){
	tooltip.style.top = e.clientY + 20;
	tooltip.style.left = e.clientX - 100;
	tooltip.style.display = 'block';
	//var rank = e.target.getAttribute('data-rank').toUpperCase();
	var rank = '';
	switch(e.target.getAttribute('data-rank'))
	{
		case 'g':
			rank = 'E';
			break;
		case 'f':
			rank = 'D';
			break;
		case 'e':
			rank = 'C';
			break;
		case 'd':
			rank = 'B';
			break;
		case 'c':
			rank = 'A';
			break;
		case 'b':
			rank = 'A+';
			break;
		case 'a':
			rank = 'A++';
			break;
		case 's':
			rank = 'S';
			break;
		case 'sp':
			rank = 'S+';
			break;
		case 'spp':
			rank = 'S++';
			break;
	}
	var chance = e.target.getAttribute('data-chance');
	var level = e.target.getAttribute('data-level');
	var average = Math.floor(level / 7);
	tooltip.innerHTML = chance + '% to encounter ' + rank + ' Rank <br>at MB level sum of ' + level + ' (average: ' + average + ').';
}
chart.onmouseout = function(){
	tooltip.style.display = 'none';
}

version = document.getElementById('version');
version.innerHTML = gameVersion;