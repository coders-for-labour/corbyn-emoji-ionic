angular.module('corbynemoji.services', [])
.factory('Emoji', function(){
  var emoji = [
  {
    category: 'jeremy',
    name: 'smile',
    defaultText: "#JeremyForLabour"
  },
  {
    category: 'jeremy',
    name: 'smile_cap',
    defaultText: "#JeremyForLabour"
  },
  {
    category: 'jeremy',
    name: 'look',
    defaultText: "#JeremyForLabour"
  },
  {
    category: 'jeremy',
    name: 'look_cap',
    defaultText: "#JeremyForLabour"
  },
  {
    category: 'jeremy',
    name: 'sad',
    defaultText: "#JeremyForLabour"
  },
  {
    category: 'jeremy',
    name: 'thumbs',
    defaultText: "#JeremyForLabour"
  },
    {
      category: 'red-jeremy',
      name: 'eyebrow',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'red-jeremy',
      name: 'smile',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'red-jeremy',
      name: 'look',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'red-jeremy',
      name: 'sad',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'orgreave_a',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'orgreave_b',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'orgreave_c',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'orgreave_d',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'miners_solidarity',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'miners_victory',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'keep_left',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'jez_we_can',
      defaultText: "#JeremyForLabour"
    }, {
      category: 'stickers',
      name: 'rather_fight_tories_a',
      defaultText: "#JeremyForLabour"
    },
    {
      category: 'stickers',
      name: 'rather_fight_tories_b',
      defaultText: "#JeremyForLabour"
    }
  ];

  return {
    all: function(){
      return emoji;
    },
    getCategory: function(category){
      return emoji.filter(function(e){
        return e.category === category;
      });
    }
  };
});
