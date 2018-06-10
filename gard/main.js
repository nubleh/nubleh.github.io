
// canvas stuff
const c=document.getElementById('main');
const debug = document.getElementById('debug');
c.width = c.clientWidth;
c.height = c.clientHeight;
c.onmousemove = handleCursor;
c.onclick = handleClick;
const ctx=c.getContext('2d');
ctx.imageSmoothingEnabled = false;


// game world
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

// easystar
var estar = new EasyStar.js();
estar.setGrid(land);
estar.setAcceptableTiles([1]);

const cursor = [0, 0];
const guy = {
  x: 4,
  y: 3,
  targetX: 4,
  targetY: 3,
  speed: 3,
  calculating: false,
  path: null,
  walkProgress: 0
};

let lastRender = 0;
let fps = 0;
setInterval(function(){
  debug.innerText = fps + 'fps';
}, 300);

// image assets
tiles = {};
tileAssets = [
  {
    name: 'grass',
    index: 1
  },
  {
    name: 'stone',
    index: 2
  },
  {
    name: 'guy',
    index: 'guy'
  },
  {
    name: 'tracks',
    index: 'tracks'
  },
  {
    name: 'cursor',
    index: 'cursor'
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

function gameLoop(delta){
  if(Math.abs(guy.x - guy.targetX) < 0.5){
    guy.x = guy.targetX;
  }
  if(Math.abs(guy.y - guy.targetY) < 0.5){
    guy.y = guy.targetY;
  }

  // calculate path if needed
  if((guy.x !== guy.targetX || guy.y !== guy.targetY) && !guy.path && !guy.calculating){
    guy.calculating = true;
    estar.findPath(guy.x, guy.y, guy.targetX, guy.targetY, function(path){
      guy.calculating = false;
      if(!path){
        guy.targetX = guy.x;
        guy.targetY = guy.y;
        return;
      }
      guy.path = path;
    });
    estar.calculate();
  }

  // traverse path
  if(guy.path && guy.path.length < 1){
    guy.path = null;
  }
  if(guy.path && guy.path.length > 0){
    const nextStep = guy.path[0];
    if(guy.x === nextStep.x && guy.y === nextStep.y){
      guy.path.shift();
    }
    guy.walkProgress += (delta/1000) * guy.speed;

    // finished stepping over to the next location
    if(guy.walkProgress >= 1){
      guy.walkProgress = 0;
      guy.x = nextStep.x;
      guy.y = nextStep.y;
      guy.path.shift();

      // the target changed since the path was calculated?
      if(guy.path
        && guy.path.length > 0
        && guy.targetX !== guy.path[guy.path.length - 1].x
        && guy.targetY !== guy.path[guy.path.length - 1].y
      ){
        guy.path = null;
      }
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
  const center = getCenter();
  drawLand(center);
  drawCursor(center);
  drawTracks(center);
  drawGuy(center);

  requestAnimationFrame(render);
}

function clearCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
}

function drawGuy(center){
  if(!tiles['guy']){
    return;
  }
  const centerX = center[0];
  const centerY = center[1];

  let x = guy.x;
  let y = guy.y;
  if(guy.path && guy.path.length > 0){
    x = guy.x + guy.walkProgress * (guy.path[0].x - guy.x);
    y = guy.y + guy.walkProgress * (guy.path[0].y - guy.y);
  }

  ctx.drawImage(
    tiles['guy'],
    centerX + (x * 16) - (y * 16),
    centerY - 16 + (x * 8) + (y * 8)
  );
}

function drawTracks(center){
  if(!tiles['tracks']){
    return;
  }
  drawTrack(center, 5, 1, 0);
  drawTrack(center, 4, 1, 0);
  drawTrack(center, 3, 1, 0);
  drawTrack(center, 2, 1, 0);
  drawTrack(center, 1, 1, 5);
  drawTrack(center, 1, 2, 1);
  drawTrack(center, 1, 3, 2);
  drawTrack(center, 2, 3, 3);
  drawTrack(center, 2, 4, 2);
  drawTrack(center, 3, 4, 3);
  drawTrack(center, 3, 5, 2);
  drawTrack(center, 4, 5, 3);
}

function drawTrack(center, x, y, dir){
  const centerX = center[0];
  const centerY = center[1];
  ctx.drawImage(
    tiles['tracks'],
    0,
    dir * 17,
    32,
    17,
    centerX + getX(x, y),
    centerY + getY(x, y),
    32,
    17
  );
}

function getX(x, y){
  return (x * 16) - (y * 16);
}
function getY(x, y){
  return (x * 8) + (y * 8);
}

function drawCursor(center){
  if(!tiles['cursor']){
    return;
  }
  const centerX = center[0];
  const centerY = center[1];

  ctx.drawImage(
    tiles['cursor'],
    centerX + (cursor[0] * 16) - (cursor[1] * 16),
    centerY + (cursor[0] * 8) + (cursor[1] * 8)
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
          centerY + (y * 8) + (x * 8)
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

  const x = e.layerX/e.target.clientWidth * c.width;
  const y = e.layerY/e.target.clientHeight * c.height;

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

function handleClick(e){
  guy.targetX = cursor[0];
  guy.targetY = cursor[1];
}
