'use strict';

var multipliers = {
  'Hammer': 5.2,
  'Horn': 4.2,
  'Switch Axe': 3.5,
  'Great Sword': 4.8,
  'Charge Blade': 3.6,
  'Long Sword': 3.3,
  'Insect Glaive': 3.1,
  'Lance': 2.3,
  'Gunlance': 2.3,
  'Heavy Bowgun': 1.5,
  'Sword and Shield': 1.4,
  'Dual Blades': 1.4,
  'Light Bowgun': 1.3,
  'Bow': 1.2,
};

var limits = {
  'attack_boost': 7,
  'critical_eye': 7,
  'critical_boost': 3,
  'weakness_exploit': 3,
  'non_elemental_boost': 1
};

Vue.component('module', {
  name: 'module',
  props: ['type', 'data', 'baseline'],
  data: function(){
    return {
      buff_types: Object.keys(limits)
    };
  },
  template: '#component-module',
  mounted: function(){
  },
  methods: {
    count: function(type){
      var total = 0;
      for(var x = 0; x < this.data.buffs.length; x++){
        if (this.data.buffs[x] === type) {
          total++;
        }
      }
      return total;
    },
    remove: function(type){
      if (this.data.buffs.indexOf(type) > -1) {
        this.data.buffs.splice(this.data.buffs.indexOf(type), 1);
      }
    },
    add: function(type){
      if(this.count(type) >= limits[type]) {
        return;
      }
      this.data.buffs.push(type);
    }
  },
  computed: {
    average_attack: function(){
      if (this.computed_affinity == 0) {
        return this.computed_attack;
      }
      if (this.computed_affinity < 0) {
        var aff = Math.abs(this.computed_affinity);
      }
      if (this.computed_affinity > 0) {
        var aff = this.computed_affinity;
      }
      return (((aff) * (this.crit * this.computed_attack)) + ((1 - aff) * this.computed_attack)).toFixed(1);
    },
    computed_affinity: function(){
      var affinity = parseFloat(this.data.affinity);
      if (this.baseline) {
        affinity = parseFloat(this.baseline.affinity);
      }
      // check attack boost
      var attack_boost = this.count('attack_boost');
      switch(attack_boost){
        case 7:
        case 6:
        case 5:
        case 4:
          affinity += 0.05;
          break;
      }

      // check crit eye
      var critical_eye = this.count('critical_eye');
      switch(critical_eye){
        case 7:
          affinity += 0.3;
          break;
        case 6:
          affinity += 0.25;
          break;
        case 5:
          affinity += 0.2;
          break;
        case 4:
          affinity += 0.15;
          break;
        case 3:
          affinity += 0.1;
          break;
        case 2:
          affinity += 0.06;
          break;
        case 1:
          affinity += 0.03;
          break;
      }

      var weakness_exploit = this.count('weakness_exploit');
      switch(weakness_exploit){
        case 3:
          affinity += 0.5;
          break;
        case 2:
          affinity += 0.30;
          break;
        case 1:
          affinity += 0.15;
          break;
      }

      return Math.min(1, affinity);
    },
    computed_attack: function(){
      var attack = parseInt(this.data.attack);
      if (this.baseline) {
        attack = parseInt(this.baseline.attack);
      }

      // check attack boost
      var non_elemental_boost = this.count('non_elemental_boost');
      switch(non_elemental_boost){
        case 1:
          attack *= 1.1;
          break;
      }

      // check attack boost
      var attack_boost = this.count('attack_boost');
      switch(attack_boost){
        case 7:
          attack += (21 * multipliers[this.type]);
          break;
        case 6:
          attack += (18 * multipliers[this.type]);
          break;
        case 5:
          attack += (15 * multipliers[this.type]);
          break;
        case 4:
          attack += (12 * multipliers[this.type]);
          break;
        case 3:
          attack += (9 * multipliers[this.type]);
          break;
        case 2:
          attack += (6 * multipliers[this.type]);
          break;
        case 1:
          attack += (3 * multipliers[this.type]);
          break;
      }

      return attack;
    },
    crit: function(){
      if (this.computed_affinity < 0) {
        return 0.75;
      }
      var critical_boost = this.count('critical_boost');
      var crit = 1.25;
      switch(critical_boost){
        case 3:
          crit = 1.4;
          break;
        case 2:
          crit = 1.35;
          break;
        case 1:
          crit = 1.3;
          break;
      }
      return crit;
    }
  }
});

var vm = new Vue({
  el: '#mount',
  template: '#main-app',
  data: {
    type: 'Charge Blade',
    baseline: {
      attack: 828,
      affinity: -0.3,
      buffs: []
    },
    compares: [],
    weapons: Object.keys(multipliers)
  },
  mounted: function(){
  },
  watch: {
  },
  computed: {
  },
  methods: {
    add_new: function(){
      this.compares.push({
        attack: this.baseline.attack,
        affinity: this.baseline.affinity,
        buffs: []
      });
    },
    change_weapon: function(weapon){
      this.type = weapon;
    }
  }
});
