// photos from flickr with creative commons license
var style = cytoscape.stylesheet();
style.selector('node')
.css({
  'shape': 'rectangle',
  'height': 80,
  'width': 80,
  'background-fit': 'cover',
  'border-color': '#000',
  'border-width': 3,
  'border-opacity': 0.5
})
style.selector('node:selected')
.css({
  'height': 150,
  'width': 150,
  'border-width': 6
})
style.selector('edge')
.css({
  'curve-style': 'bezier',
  'width': 2,
  'target-arrow-shape': 'triangle',
  'line-color': '#ffaaaa',
  'target-arrow-color': '#ff6666'
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

  style: style,

  elements: {
    nodes: nodes,
    edges: edges
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 20
  }
}); // cy init

cy.on('tap', 'node', function(e){
  console.log(e.target.id());
  if (e.target.selected()) {
    var index = parseInt(e.target.id().match(/img_(.*)/)[1]);
    var yourWindow = window.open();
    yourWindow.opener = null;
    yourWindow.location = things[index][1];
  }
});

var layouts = ['grid', 'circle', 'concentric', 'breadthfirst', {
  name: 'breadthfirst',
  padding: 10,
  directed: 10,
  circle: true
}, 'cose'];
var active_layout = 3;
document.getElementById('layout').onclick = function(){
  active_layout += 1;
  if (active_layout >= layouts.length) {
    active_layout = 0;
  }
  var new_options = typeof layouts[active_layout] === 'object' ? layouts[active_layout] : {
    name: layouts[active_layout],
    directed: true,
    padding: 10,
    randomize: true
  };
  var new_layout = cy.layout(new_options);
  new_layout.run();
};
