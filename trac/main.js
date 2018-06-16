
// canvas stuff
const c=document.getElementById('main');
const debug = document.getElementById('debug');
c.width = c.clientWidth;
c.height = c.clientHeight;
const ctx=c.getContext('2d');
ctx.imageSmoothingEnabled = false;

let lastRender = 0;
let fps = 0;
setInterval(function(){
  debug.innerText = fps + 'fps';
}, 300);

// image assets
tiles = {};
tileAssets = [
  {
    name: 'tile1',
    index: 'tile1'
  },
  {
    name: 'tile2',
    index: 'tile2'
  },
  {
    name: 'track',
    index: 'track'
  },
  {
    name: 'head',
    index: 'head'
  },
  {
    name: 'car',
    index: 'car'
  },
  {
    name: 'head2',
    index: 'head2'
  }
];
assets = {};
loadAssets();
tileW = 28;
tileH = 14;
scale = 2;

// start render loop
requestAnimationFrame(render);

function loadAssets(){
  for(let x = 0; x < tileAssets.length; x++){
    const asset = tileAssets[x];
    const img = document.createElement('img');
    img.onload = function(e){
      tiles[asset.index] = e.target;
    };
    img.src = asset.name + '.png';
  }
}

function gameLoop(delta){
}

function render(){
  const now = Date.now();
  const delta = now - lastRender;
  fps = Math.round(1000 / delta);
  lastRender = now;

  gameLoop(delta);

  clearCanvas();
  drawBG();
  drawTrack();
  drawTrain();

  requestAnimationFrame(render);
}

function clearCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
}


let trainXStart = 2;
while (trainXStart < c.width) {
  trainXStart += 2 * scale;
}
let trainX = trainXStart;
let tYStart = 29;
let cars = 11;
let trainSpeed = 1;
document.getElementById('trainSpeed').onchange = function(e){
  trainSpeed = parseInt(e.target.value);
  document.getElementById('speedDisplay').innerText = trainSpeed;
};
document.getElementById('trainSpeed').value = trainSpeed;
document.getElementById('speedDisplay').innerText = trainSpeed;
function drawTrain(){
  if (!tiles['head'] || !tiles['head2'] || !tiles['car']){
    return;
  }
  const carW = tiles['head'].width * scale;
  const carH = tiles['head'].height * scale;
  const trainY = tYStart + ((c.width - trainX) / 2);

  let carPlace = cars;
  while(carPlace > 0){
    let name = 'car';
    if (carPlace == cars) {
      name = 'head2';
    } else if (carPlace == 1) {
      name = 'head';
    }
    ctx.drawImage(
      tiles[name],
      trainX + ((carPlace - 1) * (carW - (11 * scale))),
      trainY - ((carPlace - 1) * (carH - (24 * scale))),
      carW,
      carH
    );
    carPlace -= 1;
  }
  trainX -= trainSpeed * 2 * scale;
  const trainLength = carW + ((cars - 1) * (carW - (11 * scale)));
  if (trainX < -trainLength) {
    trainX = trainXStart;
  }
}
trainX -= 240;

function drawBG(){
  const wS = tileW * scale;
  const hS = tileH * scale;
  if (tiles['tile1']){
    for(let x = 0; x < c.width; x += wS){
      for(let y = 0; y < c.height; y += hS){
        ctx.drawImage(
          tiles['tile1'],
          x,
          y,
          wS - (scale * 2),
          hS
        );
      }
    }
  }
  if (tiles['tile2']){
    for(let x = 0; x < c.width; x += wS){
      for(let y = 0; y < c.height; y += hS){
        ctx.drawImage(
          tiles['tile2'],
          x - (wS / 2),
          y - (hS / 2),
          wS - (scale * 2),
          hS
        );
      }
    }
  }
}

function drawTrack(){
  if (!tiles['track']){
    return;
  }
  const wS = tileW * scale;
  const hS = tileH * scale;

  let x = 0;
  for(let y = c.height; y > 0; y -= (hS / 2)){
    ctx.drawImage(
      tiles['track'],
      x - (wS / 2),
      y - (scale * 9),
      wS - (scale * 2),
      hS
    );
    x += (wS / 2);
  }
}
