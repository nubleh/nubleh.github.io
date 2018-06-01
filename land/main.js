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

      speed: 5,

      velX: 0,
      velY: 0,

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
    this.tickInterval = setInterval(this.tick, 10);
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
    tick: function(){
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

      this.x = Math.min(this.w, Math.max(0, this.x + this.velX));
      this.y = Math.min(this.h, Math.max(0, this.y + this.velY));
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
