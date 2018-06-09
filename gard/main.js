
const c=document.getElementById('main');
const debug = document.getElementById('debug');
c.width = c.clientWidth;
c.height = c.clientHeight;
const ctx=c.getContext('2d');

let tile = null;
requestAnimationFrame(render);

const land = [];
const landW = 10;
const landH = 7;
for(let y = 0; y < landH; y++){
  land[y] = [];
  for(let x = 0; x < landW; x++){
    land[y][x] = 0;
  }
}

let lastRender = 0;
let fps = 0;
setInterval(function(){
  debug.innerText = `${fps}fps`;
}, 1000);

function render(){
  const now = Date.now();
  fps = Math.round(1000 / (now - lastRender));
  lastRender = now;
  if (!tile) {
    const img = document.createElement('img');
    img.onload = function(e){
      tile = e.target;
      requestAnimationFrame(render);
    };
    img.src = 'tile.png';
    return;
  }

  for(let y = 0; y < land.length; y++){
    for(let x = 0; x < land[y].length; x++){
      //land[y][x] += Math.random() - 0.5;
    }
  }
  clearCanvas();
  drawLand();

  requestAnimationFrame(render);
}

function clearCanvas(){
  ctx.clearRect(0, 0, c.width, c.height);
}

function drawLand(){
  const centerX = c.width / 2;
  const centerY = c.height / 2;
  for(let y = 0; y < land.length; y++){
    for(let x = 0; x < land[y].length; x++){
      ctx.globalAlpha = 0.5 + ((y + 1) / land.length) * 0.25 + ((x + 1) / land[y].length) * 0.25;
      ctx.drawImage(
        tile,
        centerX + (x * 16) - (y * 16),
        centerY + (y * 8) + (x * 8) - land[y][x]
      );
    }    
  }
  ctx.globalAlpha = 1;
}