'use strict';

Vue.component('plane', {
  template: '#plane-template',
  data: function(){
    return {
      w: 0,
      h: 0,
      x: 0,
      y: 0,

      keyMaps: {
        32: 'keyFire',
        37: 'keyLeft',
        38: 'keyUp',
        39: 'keyRight',
        40: 'keyDown',
      },

      keyFire: false,
      keyUp: false,
      keyDown: false,
      keyLeft: false,
      keyRight: false,

      speed: 0.5,
      velX: 0,
      velY: 0,
      fireCD: 0,
      fireRate: 1,
      bulletSpeed: 0.6,

      entities: [],

      lastTick: null,
      tickInterval: null
    };
  },
  mounted: function(){
    window.derp = this;
    this.w = this.$refs.plane.offsetWidth;
    this.h = this.$refs.plane.offsetHeight;
    this.x = this.w / 2;
    this.y = this.h - 50;

    // main control handler
    window.onkeydown = this.handleKeyDown;
    window.onkeyup = this.handleKeyUp;

    // main game tick
    this.tickInterval = setInterval(this.tick, 16);
  },
  methods: {
    handleKeyDown: function(e){
      if (this.keyMaps[e.keyCode]) {
        this[this.keyMaps[e.keyCode]] = true;
      }
    },
    handleKeyUp: function(e){
      if (this.keyMaps[e.keyCode]) {
        this[this.keyMaps[e.keyCode]] = false;
      }
    },
    fire: function(){
      this.entities.push({
        type: 'bullet',
        x: this.x,
        y: this.y - 15
      });
      this.fireCD = 100;
    },
    outOfBounds: function(item){
      return item.x < 0 || item.x > this.w || item.y < 0 || item.y > this.h;
    },
    tick: function(){
      if (this.lastTick === null) {
        this.lastTick = Date.now();
        return;
      }

      if (this.keyUp) {
        this.velY = -this.speed;
      }
      if (this.keyDown) {
        this.velY = this.speed;
      }
      if (!this.keyDown && !this.keyUp) {
        this.velY = 0;
      }
      if (this.keyLeft) {
        this.velX = -this.speed;
      }
      if (this.keyRight) {
        this.velX = this.speed;
      }
      if (!this.keyLeft && !this.keyRight) {
        this.velX = 0;
      }

      const now = Date.now();
      const timeDiff = now - this.lastTick;

      // movement
      const realVelX = this.velX * timeDiff;
      const realVelY = this.velY * timeDiff;
      this.x = Math.min(this.w, Math.max(0, this.x + realVelX));
      this.y = Math.min(this.h, Math.max(0, this.y + realVelY));

      // weaponry
      if (this.fireCD) {
        const realFireRate = this.fireRate * timeDiff;
        this.fireCD = Math.max(0, this.fireCD - realFireRate);
      } else if (this.keyFire) {
        this.fire();
      }

      // entities
      this.entities = this.entities.map((item) => {
        if (this.outOfBounds(item)) {
          return null;
        }
        if (item.type === 'bullet') {
          const realBulletSpeed = this.bulletSpeed * timeDiff;
          item.y = item.y - realBulletSpeed;
        }
        if (item.velY) {
          const realVelY = item.velY * timeDiff;
          item.y = item.y + realVelY;
        }
        if (item.velX) {
          const realVelX = item.velX * timeDiff;
          item.x = item.x + realVelX;
        }
        return item;
      }).filter((item => {
        return item !== null;
      }));

      this.lastTick = now;
    }
  },
  computed: {
    shipStyle: function(){
      const style = {};
      const translateX = this.x;
      const translateY = this.y;
      style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(1px)`;
      return style;
    },
    shipObjStyle: function(){
      const style = {};
      style.transform = `translateZ(15px)`;
      return style;
    }
  }
});

const vm = new Vue({
  el: '#mount',
  template: '#main-app',
  data: {
    land: null,
    size: [5, 5],
  },
  mounted: function(){
    this.gen();
  },
  watch: {
    size: function(next, prev){
      if (next[0] !== prev[0] || next[1] !== prev[1]) {
        this.gen();
      }
    }
  },
  computed: {
  },
  methods: {
    gen: function(){
      this.land = [];
      for(let x = 0; x < this.size[0]; x++){
        this.land[x] = [];
        for(let y = 0; y < this.size[1]; y++){
          this.land[x][y] = 0;
        }        
      }
    },
    clickCell: function(rowIndex, colIndex) {
      console.log(rowIndex + '-' + colIndex);
    }
  }
});
