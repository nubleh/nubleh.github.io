
const c=document.getElementById('main');
const debug = document.getElementById('debug');
c.width = c.clientWidth;
c.height = c.clientHeight;
c.onmousemove = handleCursor;
c.onclick = handleClick;
const ctx=c.getContext('2d');

let tile = null;
let cursorImg = null;

const land = [];
const landW = 9;
const landH = 9;
for(let y = 0; y < landH; y++){
  land[y] = [];
  for(let x = 0; x < landW; x++){
    land[y][x] = 1;
  }
}
land[4][4] = 2;
land[5][5] = 2;
land[3][3] = 2;

const cursor = [0, 0];

let lastRender = 0;
let fps = 0;
setInterval(function(){
  debug.innerText = fps + 'fps';
}, 1000);

tiles = [];
tileAssets = [
  {
    name: 'grass',
    index: 1
  },
  {
    name: 'stone',
    index: 2
  }
];
assets = {};

loadAssets();

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

function render(){
  const now = Date.now();
  fps = Math.round(1000 / (now - lastRender));
  lastRender = now;
  /*
  if (!tile) {
    const img = document.createElement('img');
    img.onload = function(e){
      tile = e.target;
      requestAnimationFrame(render);
    };
    img.src = 'tile.png';
    return;
  }
  */
  if (!cursorImg) {
    const img = document.createElement('img');
    img.onload = function(e){
      cursorImg = e.target;
      requestAnimationFrame(render);
    };
    img.src = 'cursor.png';
    return;
  }

  for(let y = 0; y < land.length; y++){
    for(let x = 0; x < land[y].length; x++){
      //land[y][x] += Math.random() - 0.5;
    }
  }
  clearCanvas();
  const center = getCenter();
  drawLand(center);
  drawCursor(center);

  requestAnimationFrame(render);
}

function clearCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
}

function drawCursor(center){
  const centerX = center[0];
  const centerY = center[1];

  ctx.drawImage(
    cursorImg,
    centerX + (cursor[0] * 16) - (cursor[1] * 16),
    centerY + (cursor[0] * 8) + (cursor[1] * 8) - 2
  );
}

function drawLand(center){
  const centerX = center[0];
  const centerY = center[1];
  for(let y = 0; y < land.length; y++){
    for(let x = 0; x < land[y].length; x++){
      if (tiles[land[y][x]]){
        ctx.drawImage(
          tiles[land[y][x]],
          centerX + (x * 16) - (y * 16),
          centerY + (y * 8) + (x * 8) - land[y][x]
        );
      }
    }    
  }
}

function getCenter(){
  let centerX = c.width / 2;
  let centerY = c.height / 2;

  // tile sprite is 32x32
  centerX -= 16;
  centerY -= 16;

  // center on width
  centerX -= (landW / 2) * 16 - 8;
  centerY -= (landW / 2) * 8 - 4;

  // center on height
  centerX += (landH / 2) * 16 - 8;
  centerY -= (landH / 2) * 8 - 4;
  return [centerX, centerY];
}

function handleCursor(e){
  const center = getCenter();
  const centerX = center[0];
  const centerY = center[1];

  const x = e.layerX;
  const y = e.layerY;

  let targetX = x - 20;
  let targetY = y - 12;
  let stepX = 0;
  let stepY = 0;
  while(targetY >= centerY){
    if(targetX > centerX){
      targetX -= 16;
      targetY -= 8;
      stepX++;
    } else {
      targetX += 16;
      targetY -= 8;
      stepY++;
    }
  }
  cursor[0] = Math.max(0, Math.min(stepX, landW - 1));
  cursor[1] = Math.min(stepY, landH - 1);
}

function handleClick(){
  land[cursor[1]][cursor[0]] = 0;
}
