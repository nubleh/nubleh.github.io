
/*
    this.image.moveTo(0, 1);
    this.image.beginFill(0x026da5);
    this.image.lineTo(game.width, 1);
    this.image.lineTo(game.width, 35);
    this.image.lineTo(0, 35);
    this.image.lineTo(0, 1);
    this.image.endFill();
      'ギャグ・コメディ': 0xffcc00,
      '恋愛': 0xff94c4,
      'ファンタジー': 0x9882ae,
      'ホラー・ミステリー': 0xabb2b5,
      'エッセイ': 0xa0bf69,
      'アクション': 0x6d93de,
      '動物': 0xd48363,
      'グルメ': 0xf8a239,
      '日常': 0xff7373,
      'pixivコミック限定': 0x26a8e8,
      'BL': 0x59ccd9,
      'その他': 0x8fb8ed,
      'TL': 0xf184f1,

*/

colors = {
  'ギャグ・コメディ': 0xffcc00,
  '恋愛': 0xff94c4,
  'ファンタジー': 0x9882ae,
  'ホラー・ミステリー': 0xabb2b5,
  'エッセイ': 0xa0bf69,
  'アクション': 0x6d93de,
  '動物': 0xd48363,
  'グルメ': 0xf8a239,
  '日常': 0xff7373,
  'pixivコミック限定': 0x26a8e8,
  'BL': 0x59ccd9,
  'その他': 0x8fb8ed,
  'TL': 0xf184f1,
};
categories = [
	'ギャグ・コメディ',
	'ギャグ・コメディ',
	'ギャグ・コメディ',
	'ギャグ・コメディ',
	'pixivコミック限定',
	'pixivコミック限定',
	'BL',
	'恋愛',
	'恋愛',
	'恋愛',
];
pie = {};
total = 0;
for(let k = 0; k < categories.length; k++) {
	let category = categories[k];
	if (typeof pie[category] === 'undefined') {
		pie[category] = 1;
	} else {
		pie[category] += 1;
	}
	total += 1;
}
for(key in pie) {
	pie[key] = pie[key] / total;
}
a=game.add.graphics(game.camera.x, game.camera.y);

radius = 50;
angle = 0;
_x = radius + (Math.cos(angle) * radius);
_y = radius - (Math.sin(angle) * radius);
__x = radius + (Math.cos(Math.random()*Math.PI) * radius);
__y = radius - (Math.sin(Math.random()*Math.PI) * radius);
a.moveTo(radius, radius);
a.beginFill(Math.random()*16777215);
a.lineTo(_x, _y);
a.lineTo(__x, __y);
a.lineTo(radius, radius);
a.endFill();

a=game.add.graphics(game.camera.x, game.camera.y);
colors = {
  'ギャグ・コメディ': 0xffcc00,
  '恋愛': 0xff94c4,
  'ファンタジー': 0x9882ae,
  'ホラー・ミステリー': 0xabb2b5,
  'エッセイ': 0xa0bf69,
  'アクション': 0x6d93de,
  '動物': 0xd48363,
  'グルメ': 0xf8a239,
  '日常': 0xff7373,
  'pixivコミック限定': 0x26a8e8,
  'BL': 0x59ccd9,
  'その他': 0x8fb8ed,
  'TL': 0xf184f1,
};
categories = [
	'ギャグ・コメディ',
	'ギャグ・コメディ',
	'ギャグ・コメディ',
	'pixivコミック限定',
	'pixivコミック限定',
	'BL',
	'恋愛',
	'恋愛',
	'恋愛',
	'日常',
	'日常',
	'日常',
	'日常',
	'日常',
];
while(categories.length < 10) {
	let newcats = [];
	for(let k = 0; k < categories.length; k++) {
		newcats.push(categories[k]);
		newcats.push(categories[k]);
	}
	categories = newcats;
}
angle = 0;
increment = Math.PI*2/categories.length;
index = 0;
while (angle < Math.PI*2) {
	_x = radius + (Math.cos(angle) * radius);
	_y = radius - (Math.sin(angle) * radius);
	__x = radius + (Math.cos(angle + increment) * radius);
	__y = radius - (Math.sin(angle + increment) * radius);
	a.moveTo(radius, radius);
	a.beginFill(colors[categories[index]]);
	a.lineTo(_x, _y);
	a.lineTo(__x, __y);
	a.lineTo(radius, radius);
	a.endFill();
	angle += increment;
	index += 1;
}

