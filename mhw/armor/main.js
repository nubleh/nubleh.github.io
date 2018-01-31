'use strict';

Vue.component('sockets', {
  name: 'sockets',
  props: ['sockets'],
  template: '#component-sockets'
});
var vm = new Vue({
  el: '#mount',
  template: '#main-app',
  data: {
    equipper: {
      head: null,
      chest: null,
      arms: null,
      waist: null,
      legs: null
    },
    searchQuery: '',
    lowRank: false,
    highRank: true
  },
  mounted: function(){
  },
  watch: {
  },
  computed: {
    equippedSkills: function(){
      var skills = {};
      var addSkills = function(item){
        if (!item) {
          return;
        }
        for(var x = 0; x < item.skills.length; x++){
          var skillName = item.skills[x].name;
          var skillLevel = parseInt(item.skills[x].level);
          if (typeof skills[skillName] !== 'number') {
            skills[skillName] = 0;
          }
          skills[skillName] += skillLevel;
        }
      };
      addSkills(this.equipper.head);
      addSkills(this.equipper.chest);
      addSkills(this.equipper.arms);
      addSkills(this.equipper.waist);
      addSkills(this.equipper.legs);

      return skills;
    }
  },
  methods: {
    exactMatch: function(word){
      if (this.searchQuery !== '') {
        var re = this.searchQuery;
        if (re[0] === '"') {
          re = '^' + re.substr(1, re.length);
        }
        if (re[re.length - 1] === '"') {
          re = re.substr(0, re.length - 1) + '$';
        }
        var regex = new RegExp(re, 'i');
        return regex.test(word);
      }
      return false;
    },
    search: function(word){
      this.searchQuery = '"' + word + '"';
    },
    armorBySlot: function(slot){
      var _this = this;

      if (_this.searchQuery !== '') {
        var re = _this.searchQuery;
        if (re[0] === '"') {
          re = '^' + re.substr(1, re.length);
        }
        if (re[re.length - 1] === '"') {
          re = re.substr(0, re.length - 1) + '$';
        }
        var regex = new RegExp(re, 'i');
      }

      return armor.filter(function(item){
        var result = item.slot === slot;
        return result;
      }).filter(function(item){
        var result = false;
        if (_this.highRank && item.rank === 'high') {
          result = true;
        }
        if (_this.lowRank && item.rank === 'low') {
          result = true;
        }
        return result;
      }).filter(function(item){
        var result = false;
        if (_this.searchQuery !== '') {
          if (regex.test(item.name)) {
            result = true;
          }
          for(var x = 0; x < item.skills.length; x++){
            if (regex.test(item.skills[x].name)) {
              result = true;
            }
          }
        } else {
          result = true;
        }
        return result;
      });
    },
    equip: function(item){
      this.equipper[item.slot] = item;
    }
  }
});
