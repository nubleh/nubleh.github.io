// photos from flickr with creative commons license

var style = cytoscape.stylesheet();
style.selector('node')
.css({
  'height': 80,
  'width': 80,
  'background-fit': 'cover',
  'border-color': '#000',
  'border-width': 3,
  'border-opacity': 0.5,
  'cursor': 'pointer'
})
style.selector('.embiggen')
.css({
  'height': 200,
  'width': 200,
  'z-index': 10
})
.selector('edge')
.css({
  'curve-style': 'bezier',
  'width': 6,
  'target-arrow-shape': 'triangle',
  'line-color': '#ffaaaa',
  'target-arrow-color': '#ffaaaa'
})

for(var x = 0; x < things.length; x++){
  style.selector('#img_' + x).css({
    'background-image': things[x][0]
  });
}

var nodes = things.map(function(item, index){
  return {
    data: { id: 'img_' + index }
  };
});

var edges = [];
var makeEdge = function(r, t){
  if (typeof r.c === 'undefined') {
    return;
  }
  for(var x = 0; x < r.c.length; x++){
    edges.push({ data: {
      source: 'img_' + r.i,
      target: 'img_' + r.c[x].i
    }});
    makeEdge(r.c[x]);
  }
};
makeEdge(relations, things);

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: style,

  elements: {
    nodes: nodes,
    edges: edges
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function(e){
  console.log(e.target.id());
  if (e.target.hasClass('embiggen')){
    var index = parseInt(e.target.id().match(/img_(.*)/)[1]);
    var yourWindow = window.open();
    yourWindow.opener = null;
    yourWindow.location = things[index][1];
  } else {
    cy.$('.embiggen').removeClass('embiggen');
    e.target.addClass('embiggen');
  }
});

var layouts = ['grid', 'circle', 'concentric', 'breadthfirst', 'cose'];
var active_layout = 3;
document.getElementById('layout').onclick = function(){
  active_layout += 1;
  if (active_layout >= layouts.length) {
    active_layout = 0;
  }
  var new_layout = cy.layout({
    name: layouts[active_layout],
    directed: true,
    padding: 10,
    randomize: true
  });
  new_layout.run();
};
