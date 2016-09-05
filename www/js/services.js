angular.module('corbynemoji.services', [])
.factory('Emoji', function(){
  var emoji = [
  {
    category: 'jeremy',
    name: 'smile',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'smile_cap',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'look',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'look_cap',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'sad',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'thumbs',
    defaultText: "#JeremyForLabour",
    description: ""
  },
    {
      category: 'red-jeremy',
      name: 'eyebrow',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'smile',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'look',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'sad',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'orgreave_a',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'orgreave_b',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'orgreave_c',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'orgreave_d',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'miners_solidarity',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'miners_victory',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'keep_left',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'jez_we_can',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'rather_fight_tories_a',
      defaultText: "#JeremyForLabour",
      description: ""
    },
    {
      category: 'stickers',
      name: 'rather_fight_tories_b',
      defaultText: "#JeremyForLabour",
      description: ""
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
