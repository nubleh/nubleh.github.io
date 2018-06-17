
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
  },
  {
    name: 'homu-edge',
    index: 'homu-edge'
  }
];
assets = {};
loadAssets();
tileW = 28;
tileH = 14;
scale = 2;

let trainXStart = 2;
while (trainXStart < c.width) {
  trainXStart += 2 * scale;
}
let trainX = trainXStart;
let trainSize = 11;
let trainSpeed = 30;
let trainVel = trainSpeed;
document.getElementById('trainSpeed').onchange = function(e){
  trainSpeed = parseInt(e.target.value);
  document.getElementById('speedDisplay').innerText = trainSpeed;
};
document.getElementById('trainSpeed').value = trainSpeed;
document.getElementById('speedDisplay').innerText = trainSpeed;

document.getElementById('trainSize').onchange = function(e){
  trainSize = parseInt(e.target.value);
  document.getElementById('sizeDisplay').innerText = trainSize;
};
document.getElementById('trainSize').value = trainSize;
document.getElementById('sizeDisplay').innerText = trainSize;

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
  trainX -= (delta / 1000) * trainVel * 2 * scale;
  if (trainVel != trainSpeed) {
    trainVel = trainVel + ((delta / 1000) * ((trainSpeed - trainVel) / 2));
    if (trainVel < 0.001) {
      trainVel = 0;
    }
  }
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
  drawHomu();

  requestAnimationFrame(render);
}

function clearCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
}

function drawTrain(){
  if (!tiles['head'] || !tiles['head2'] || !tiles['car']){
    return;
  }
  const carW = tiles['head'].width * scale;
  const carH = tiles['head'].height * scale;
  const step = 2 * scale;
  const _trainX = trainX - ((trainX - scale) % step);
  const trainY = c.height - (63 * scale) - (_trainX / 2);

  let carPlace = trainSize;
  while(carPlace > 0){
    let name = 'car';
    if (carPlace == trainSize) {
      name = 'head2';
    } else if (carPlace == 1) {
      name = 'head';
    }
    const shake = 0;
    ctx.drawImage(
      tiles[name],
      _trainX + ((carPlace - 1) * (carW - (11 * scale))),
      trainY - ((carPlace - 1) * (carH - (24 * scale))) + shake,
      carW,
      carH
    );
    carPlace -= 1;
  }
  const trainLength = carW + ((trainSize - 1) * (carW - (11 * scale)));
  if (trainX < -trainLength) {
    trainX = trainXStart;
  }
}

function drawBG(){
  const wS = tileW * scale;
  const hS = tileH * scale;
  if (tiles['tile1']){
    for(let x = 0; x < c.width + wS; x += wS){
      for(let y = c.height; y > -hS; y -= hS){
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
    for(let x = 0; x < c.width + wS; x += wS){
      for(let y = c.height; y > -hS; y -= hS){
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

function drawHomu(){

}

function drawTrack(){
  if (!tiles['track']){
    return;
  }
  const wS = tileW * scale;
  const hS = tileH * scale;

  let x = -(wS / 2);
  for(let y = c.height - hS + (hS / 2); y > 0; y -= (hS / 2)){
    ctx.drawImage(
      tiles['track'],
      x,
      y,
      wS - (scale * 2),
      hS
    );
    x += (wS / 2);
  }
}
