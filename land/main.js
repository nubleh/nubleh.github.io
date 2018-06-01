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

      speed: 0.4,
      velX: 0,
      velY: 0,
      fireCD: 0,
      fireRate: 0.3,
      bulletSpeed: 0.3,

      entities: [],

      paused: false,
      lastTick: null,
      tickRate: 100,
      tickTimeout: null
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
    clearTimeout(this.tickTimeout);
    this.tickTimeout = setTimeout(this.tick, 16);
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
        key: Math.random(),
        type: 'bullet',
        velX: 0,
        velY: 0,
        x: this.x,
        y: this.y - 15
      });
      this.fireCD = 100;
    },
    outOfBounds: function(item){
      return item.x < 0 || item.x > this.w || item.y < 0 || item.y > this.h;
    },
    tick: function(){
      if (this.paused) {
        clearTimeout(this.tickTimeout);
        this.tickTimeout = setTimeout(this.tick, 16);
        return;
      }
      if (this.lastTick === null) {
        this.lastTick = Date.now();
        clearTimeout(this.tickTimeout);
        this.tickTimeout = setTimeout(this.tick, 16);
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

      const sideBulletSpeed = this.bulletSpeed * 0.9;

      // entities
      const bullets = this.entities.filter((item) => {
        return item.type === 'bullet';
      });
      this.entities = this.entities.map((item) => {
        if (item.velY) {
          const entRealVelY = item.velY * timeDiff;
          item.y = item.y + entRealVelY;
        }
        if (item.velX) {
          const entRealVelX = item.velX * timeDiff;
          item.x = item.x + entRealVelX;
        }

        if (item.type === 'bullet') {
          const realBulletSpeed = this.bulletSpeed * timeDiff;
          // deduct x component of bullet speed
          // x^2 + y^2 = v^2
          const entRealVelX = item.velX * timeDiff;
          item.x = item.x + entRealVelX;
          let realYSpeed = Math.sqrt(Math.pow(realBulletSpeed, 2) - Math.pow(entRealVelX, 2));
          if (isNaN(realYSpeed) || realYSpeed < 0) {
            realYSpeed = 0.05;
          }
          item.y = item.y - realYSpeed;

          if (item.x >= this.w || item.x <= 0) {
            item.velX = -item.velX;
            if (item.x >= this.w) {
              item.x = this.w - 1;
            }
            if (item.x <= 0) {
              item.x = 1;
            }
          }
        }

        if (item.type === 'enemy') {
          const bulletRadius = 4;
          const enemyRadius = 10 + bulletRadius;
          for(let x = 0; x < bullets.length; x++){
            if (bullets[x].x > item.x - enemyRadius
              && bullets[x].x < item.x + enemyRadius
              && bullets[x].y > item.y - enemyRadius
              && bullets[x].y < item.y + enemyRadius) {
              bullets[x].velX = ((Math.random() * sideBulletSpeed * 2) - sideBulletSpeed);
              return null;
            }
          }
        }

        if (this.outOfBounds(item)) {
          return null;
        }

        return item;
      }).filter((item => {
        return item !== null;
      }));

      // spawn enemy
      if (Math.random() > 0.95) {
        this.entities.push({
          key: Math.random(),
          type: 'enemy',
          y: 0,
          x: 20 * (Math.round(Math.random() * (this.w / 20))),
          velY: 0.05
        });
      }

      this.lastTick = now;
      this.$nextTick(() => {
        clearTimeout(this.tickTimeout);
        this.tickTimeout = setTimeout(this.tick, 16);
      });
    }
  },
  computed: {
    shipStyle: function(){
      const style = {};
      const translateX = this.x;
      const translateY = this.y;
      style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(1px)`;
      style.zIndex = this.y;
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
