'use strict';

var vm = new Vue({
  el: '#mount',
  template: '#main-app',
  data: {
    rarity: 'normal',
    rareName: '',
    prefix: [],
    suffix: [],
    activeOrb: '',
    cursorLeft: 10,
    cursorTop: 20
  },
  mounted: function(){
    var _this = this;
    window.addEventListener('keyup', function(e){
      if (e.key === 'Shift') {
        _this.clearActiveOrb();
      }
    });
  },
  watch: {
    rarity: function(){
      if (this.rarity === 'rare') {
        this.rareName = generateRareName();
      } else {
        this.rareName = '';
      }
      if (this.rarity === 'magic') {
        this.prefix = this.prefix.slice(0, 1);
        this.suffix = this.suffix.slice(0, 1);
      }
      if (this.rarity === 'normal') {
        this.prefix = [];
        this.suffix = [];
      }
    }
  },
  computed: {
    physicalDamage: function(){
      return 42 + '-' + 78;
    },
    criticalStrikeChance: function(){
      return (6).toFixed(2) + '%';
    },
    attacksPerSecond: function(){
      return (1.3).toFixed(2);
    },
    weaponRange: function(){
      return Math.round(9);
    },
    reqLevel: function(){
      return Math.round(70);
    },
    reqStr: function(){
      return Math.round(121);
    },
    reqInt: function(){
      return Math.round(113);
    },
    baseName: function(){
      var baseName = 'Sambar Sceptre';
      if (this.rarity === 'magic') {
        if (this.prefix.length > 0) {
          baseName = this.prefix[0].affix + ' ' + baseName;
        }
        if (this.suffix.length > 0) {
          baseName = baseName + ' ' + this.suffix[0].affix;
        }
      }
      return baseName;
    },
    affixes: function(){
      var affixes = {};
      this.prefix.concat(this.suffix).map(function(affix){
        if(affix.mods.length > 1 && affix.mods[0] === affix.mods[1]){
          // a multi-value mod
          affixes[affix.mods[0]] = {
            text: affix.mods[0].replace('#', affix.value[0] + '-' + affix.value[1]),
          }
        } else {
          affix.mods.map(function(mod, index){
            if(affixes[mod]){
              affixes[mod].value += affix.value[index];
            } else {
              affixes[mod] = {};
              affixes[mod].value = affix.value[index];
            }
            affixes[mod].text = mod.replace('#', affixes[mod].value);
          });
        }
      });
      return affixes;
    }
  },
  methods: {
    getRandomWithProperFixedPoint: function(num1, num2){
      if (!num1.toString().match(/\./)) {
        return num1 + Math.round(Math.random() * (num2 - num1));
      }
      var decimals = num1.toString().split('.');
      var fixedPoints = decimals[1].length;
      var liftedNum1 = num1 * Math.pow(10, fixedPoints);
      var liftedNum2 = num2 * Math.pow(10, fixedPoints);
      var liftedRandom = liftedNum1 + Math.round(Math.random() * (liftedNum2 - liftedNum1));
      return liftedRandom / Math.pow(10, fixedPoints);
    },
    rollModValue: function(mod){
      var values = [];
      if (mod.range1.match(' to ')) {
        var nums = mod.range1.split(' to ').map(function(num){
          return parseFloat(num); }
        );
        values[0] = this.getRandomWithProperFixedPoint(nums[0], nums[1]);
      } else {
        values[0] = parseFloat(mod.range1);
      }
      if (mod.range2) {
        if (mod.range2.match(' to ')) {
          var nums = mod.range2.split(' to ').map(function(num){ return parseFloat(num); });
          values[1] = this.getRandomWithProperFixedPoint(nums[0], nums[1]);
        } else {
          values[1] = parseFloat(mod.range2);
        }
      }
      return values;
    },
    addMod: function(type){
      // type is either prefix or suffix
      var newMod = generateMod(type);
      newMod.value = this.rollModValue(newMod);
      var existing = false;
      this.prefix.concat(this.suffix).map(function(existingAffix){
        if (existingAffix.mod === newMod.mod) {
          existing = true;
        }
      });
      if (existing) {
        this.addMod(type);
        return;
      }
      if (type === 'prefix' && this.prefix.length < 3) {
        this.prefix.push(newMod);
      }
      if (type === 'suffix' && this.suffix.length < 3) {
        this.suffix.push(newMod);
      }
    },
    addPrefix: function(){
      this.addMod('prefix');
    },
    addSuffix: function(){
      this.addMod('suffix');
    },
    upgradeToMagic: function(){
      if (this.rarity !== 'normal') {
        return;
      }
      var luck = Math.random();
      if (luck > 0.33) {
        this.addPrefix();
      }
      if (luck < 0.67) {
        this.addSuffix();
      }
      this.rarity = 'magic';
    },
    upgradeToRare: function(){
      if (this.rarity !== 'normal') {
        return;
      }
      this.addPrefix();
      this.addPrefix();
      this.addSuffix();
      this.addSuffix();
      var luck = Math.random();
      if (luck <= 0.25) {
        this.addPrefix();
      } else if (luck <= 0.5) {
        this.addSuffix();
      } else if (luck <= 0.75) {
        this.addPrefix();
        this.addSuffix();
      }
      this.rarity = 'rare';
    },
    rerollRare: function(){
      if (this.rarity !== 'rare') {
        return;
      }
      this.prefix = [];
      this.suffix = [];
      this.rareName = generateRareName();
      this.convertToNormal();
      this.upgradeToRare();
    },
    rerollMagic: function(){
      if (this.rarity !== 'magic') {
        return;
      }
      this.prefix = [];
      this.suffix = [];
      this.rareName = '';
      this.convertToNormal();
      this.upgradeToMagic();
    },
    upgradeMagicToRare: function(){
      if (this.rarity !== 'magic') {
        return;
      }
      var luck = Math.random();
      if (luck <= 0.5) {
        this.addPrefix();
      } else {
        this.addSuffix();
      }
      this.rarity = 'rare';
    },
    addModToMagic: function(){
      if (this.rarity !== 'magic') {
        return;
      }
      if (this.prefix.length < 1) {
        this.addPrefix();
      } else if (this.suffix.length < 1) {
        this.addSuffix();
      }
    },
    addModToRare: function(){
      if (this.rarity !== 'rare') {
        return;
      }
      if (this.prefix.length >= 3 && this.suffix.length < 3) {
        this.addSuffix();
      } else if (this.suffix.length >= 3 && this.prefix.length < 3) {
        this.addPrefix();
      } else if (this.suffix.length < 3 && this.prefix.length < 3) {
        if (Math.random() > 0.5) {
          this.addSuffix();
        } else {
          this.addPrefix();
        }
      }
    },
    convertToNormal: function(){
      this.rarity = 'normal';
    },
    rerollModValues: function(){
      var _this = this;
      this.prefix = this.prefix.map(function(item){
        item.value = _this.rollModValue(item);
        return item;
      });
      this.suffix = this.suffix.map(function(item){
        item.value = _this.rollModValue(item);
        return item;
      });
    },
    moveCursor: function(e){
      this.cursorLeft = e.clientX - 10;
      this.cursorTop = e.clientY - 10;
    },
    useActiveOrb: function(){
      if (this.activeOrb === 'transmutation') {
        this.upgradeToMagic();
      }
      if (this.activeOrb === 'alchemy') {
        this.upgradeToRare();
      }
      if (this.activeOrb === 'chaos') {
        this.rerollRare();
      }
      if (this.activeOrb === 'alteration') {
        this.rerollMagic();
      }
      if (this.activeOrb === 'regal') {
        this.upgradeMagicToRare();
      }
      if (this.activeOrb === 'augmentation') {
        this.addModToMagic();
      }
      if (this.activeOrb === 'exalted') {
        this.addModToRare();
      }
      if (this.activeOrb === 'scouring') {
        this.convertToNormal();
      }
      if (this.activeOrb === 'divine') {
        this.rerollModValues();
      }
    },
    clearActiveOrb: function(){
      this.activeOrb = '';
    },
    activateTransmutation: function(e){
      this.activeOrb = 'transmutation';
      e.preventDefault();
    },
    activateAlchemy: function(e){
      this.activeOrb = 'alchemy';
      e.preventDefault();
    },
    activateChaos: function(e){
      this.activeOrb = 'chaos';
      e.preventDefault();
    },
    activateAlteration: function(e){
      this.activeOrb = 'alteration';
      e.preventDefault();
    },
    activateRegal: function(e){
      this.activeOrb = 'regal';
      e.preventDefault();
    },
    activateAugmentation: function(e){
      this.activeOrb = 'augmentation';
      e.preventDefault();
    },
    activateExalted: function(e){
      this.activeOrb = 'exalted';
      e.preventDefault();
    },
    activateScouring: function(e){
      this.activeOrb = 'scouring';
      e.preventDefault();
    },
    activateDivine: function(e){
      this.activeOrb = 'divine';
      e.preventDefault();
    }
  }
});

function generateRareName(){
  var prefix = ['Agony', 'Apocalypse', 'Armageddon', 'Beast', 'Behemoth', 'Blight', 'Blood', 'Bramble', 'Brimstone', 'Brood', 'Carrion', 'Cataclysm', 'Chimeric', 'Corpse', 'Corruption', 'Damnation', 'Death', 'Demon', 'Dire', 'Dragon', 'Dread', 'Doom', 'Dusk', 'Eagle', 'Empyrean', 'Fate', 'Foe', 'Gale', 'Ghoul', 'Gloom', 'Glyph', 'Golem', 'Grim', 'Hate', 'Havoc', 'Honour', 'Horror', 'Hypnotic', 'Kraken', 'Loath', 'Maelstrom', 'Mind', 'Miracle', 'Morbid', 'Oblivion', 'Onslaught', 'Pain', 'Pandemonium', 'Phoenix', 'Plague', 'Rage', 'Rapture', 'Rune', 'Skull', 'Sol', 'Soul', 'Sorrow', 'Spirit', 'Storm', 'Tempest', 'Torment', 'Vengeance', 'Victory', 'Viper', 'Vortex', 'Woe', 'Wrath'];
  var suffix = ['Bane', 'Blow', 'Breaker', 'Call', 'Chant', 'Crack', 'Crusher', 'Cry', 'Gnarl', 'Grinder', 'Knell', 'Ram', 'Roar', 'Smasher', 'Song', 'Spell', 'Star', 'Weaver'];
  return prefix[Math.floor(Math.random() * prefix.length)] + ' ' + suffix[Math.floor(Math.random() * suffix.length)];
}