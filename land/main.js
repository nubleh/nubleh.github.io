'use strict';

var vm = new Vue({
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
      for(var x = 0; x < this.size[0]; x++){
        this.land[x] = [];
        for(var y = 0; y < this.size[1]; y++){
          this.land[x][y] = 0;
        }        
      }
    },
    clickCell: function(rowIndex, colIndex) {
      console.log(rowIndex + '-' + colIndex);
    }
  }
});
