$(function($) {
  var years = {
    '1986': {
      '6': "うまれた",
    },
    '1989': {
      '6': "PCでゲームをはじめる",
    },
    '1993': {
      '1': "しょうがっこう",
    },
    '1995': {
      '12': "SNES ゲット",
    },
    '1999': {
      '1': "こうこう",
    },
    '2002': {
      '12': "PS2 ゲット",
    },
    '2004': {
      '5': "だいがく"
    },
    '2005': {
      '12': "NDS ゲット",
    },
    '2005': {
      '3': "ねこだ!",
    },
    '2006': {
      '3': "ねこが...",
      '4': "...",
    },
    '2007': {
      '4': "もっとねこ",
      '8': "Wii ゲット",
    },
    '2008': {
      '6': "PS3 ゲット",
    },
    '2010': {
      '7': "そつぎょう",
      '8': "さいしょのしごと",
    },
    '2012': {
      '12': "WiiU ゲット",
    },
    '2013': {
      '4': "3DS ゲット",
    },
    '2014': {
      '1': "はじめてにほんにいく",
      '2': "モンハン",
      '5': "Pixiv",
    },
  };
  var y_prev = 0;
  for(var y in years){
    var y_num = parseInt(y);
    var y_diff = y_num - y_prev;
    var y_tpl, y_empty, y_el;
    if(y_prev != 0 && y_diff > 1){
      for(var x = 1; x < y_diff; x++){
        y_empty = y_prev + x;
        y_tpl = Handlebars.compile($('#year-tpl').html())({
          y_num: y_empty,
          id: 'year-'+y_empty,
        });
        y_el = $(y_tpl).addClass('empty');
        y_el.appendTo($('#years'));
      }
    }
    y_tpl = Handlebars.compile($('#year-tpl').html())({
      y_num: y,
      id: 'year-'+y,
    });
    y_el = $(y_tpl);
    y_el.appendTo($('#years'));

    var m, m_tpl, m_el;
    for(m = 1; m < 13; m++){
      m_tpl = Handlebars.compile($('#month-tpl').html())({
        m_num: m,
        id: 'year-'+ y_el.data('year')+ '-month-'+m,
      });
      m_el = $(m_tpl);
      m_el.appendTo(y_el);
    }
    for(m in years[y]){
      y_el.find('.month[data-month='+m+']').removeClass('empty').html(years[y][m]);
    }

    // done.
    y_prev = y_num;
  }

  var pics = {
    'y1986m6': ['newgame.png'],
    'y1989m6': ['3yo.jpg'],
    'y1993m1': ['primary.jpg'],
    'y1999m1': ['highschool.jpg'],
    'y2004m5': ['uni.jpg'],
    'y2005m3': ['neko-1a.jpg','neko-1b.jpg','neko-1c.jpg','neko-1d.jpg'],
    'y2006m3': ['neko-2a.jpg','neko-2b.jpg'],
    'y2006m4': ['neko-3a.jpg','neko-3b.jpg','neko-3c.jpg','neko-3d.jpg','neko-3e.jpg'],
    'y2007m4': ['neko-4a.jpg','neko-4b.jpg'],
    'y2010m8': ['firstjob.jpg'],
    'y2012m12': ['wiiu.jpg'],
    'y2013m4': ['3ds.jpg'],
    'y2013m9': ['chiidon.jpg'],
    'y2014m1': ['hajimete-1.jpg','hajimete-2.jpg','hajimete-3.jpg','hajimete-4.jpg','hajimete-5.jpg'],
    'y2014m2': ['mh4.jpg'],
    'y2014m5': ['pixiv.jpg'],
  }
  var pics_el = $(Handlebars.compile($('#pics-tpl').html())({pics: pics}));
  pics_el.appendTo($(document.body));

  for(var age = 0; age <= 28; age ++){
    var age_tpl = Handlebars.compile($('#age-tpl').html())({
      age: age,
    });
    var age_el = $(age_tpl);
    age_el.appendTo($('#age'));
  }

  var updateArrow = function(){
    var arrow_el = $('#arrow');
    var arrow = arrow_el.offset().top + arrow_el.height()/2;
    var year = 1986;
    $('.item').each(function(index, el){
      var i_top = $(el).offset().top;
      var i_bot = i_top + $(el).height();
      if(arrow >= i_top && arrow < i_bot){
        $(el).addClass('active');
        if($(el).hasClass('year')){
          year = $(el).data('year');
        } else {
          var pic_id = '#y'+$(el).parents('.year').data('year')+'m'+$(el).data('month');
          $('.pic').hide();
          $(pic_id).show();
        }
      } else {
        $(el).removeClass('active');
      }
    });
    $('.age').removeClass('active');
    $('.age[data-age='+(year-1986)+']').addClass('active');
  }
  updateArrow();
  $(window).on('scroll', function(e){
    updateArrow();
  });

  window.t = setInterval(function(){
    var pop = $('<div id="pop"></div>');
    var min_top = $('.year[data-year=1993]').offset().top;
    var max_top;
    var roll = Math.random();
    if(roll<0.8){
      pop.html('ゲーム！');
      max_top = $('.year[data-year=2014]').offset().top;
    } else if(roll<0.9){
      pop.html('勉強。。。');
      max_top = $('.year[data-year=2009]').offset().top;
    } else {
      pop.html('仕事。。。');
      min_top = $('.year[data-year=2010]').offset().top;
      max_top = $('.year[data-year=2014]').offset().top;
    }
    var top = min_top + Math.random()*(max_top-min_top);
    pop.appendTo(document.body)
      .css('opacity', 1)
      .css('left', '80%')
      .css('top', top)
      .animate({left:'85%',opacity:'0'},{
        duration: 600, 
        easing: 'swing',
        complete: function(){
          pop.remove();
        },
      });
  }, 400)
});


