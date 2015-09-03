
init();
document.getElementById('alt-tip').onclick = function(e){
	var index = e.currentTarget.getAttribute('data-index');
	draw_chart(index, false);
}
list_el = document.getElementById('test-list');
list_el.onclick = function(e){
	var target = e.target;
	var index=null;
	while(target != list_el){
		index = +target.getAttribute('data-index');
		target = target.parentElement
	}
	if(index==null){
		return;
	}
	var sc_as_max = true;
	if(e.altKey){
		sc_as_max = false;
	}
	draw_chart(index, sc_as_max);
	location.hash = index;
	for(var x=0;x<list_el.children.length;x++){
		list_el.children[x].classList.remove('active');
	}
	document.getElementById('li-'+index).classList.add('active');
};
function init(){
	var dr = document.referrer;
	if(dr.length){
		ga('send', 'event', 'referrer', dr);
	}
	var list_el = document.getElementById('test-list');
	var list_item_el = '<li id="li-__X__" data-index="__X__" class="__SC__"><div class="name">__NAME__</div><div class="link"><a target="_blank" href="__LINK__">src</a></div></li>';
	var html = '', datum;
	for(var x=0;x<data.length;x++){
		datum = data[x];
		html += list_item_el.replace(/__X__/g, x).replace(/__SC__/g, 'sc'+datum.sc.length).replace('__NAME__', datum.name).replace('__LINK__', datum.url);
	}
	list_el.innerHTML = html;

	// let's do permalinking
	var hash = location.hash, li_el;
	if(hash.length){
		hash = +hash.substr(1);
		li_el = document.getElementById('li-'+hash);
		if(!li_el){
			li_el = document.getElementById('li-0');
			hash = 0;
		}
		draw_chart(hash);
		li_el.classList.add('active');
		setTimeout(function(){li_el.scrollIntoView();}, 100);
	}
}
