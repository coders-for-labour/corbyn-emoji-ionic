angular.module('starter.services', [])
.factory('Emoji', function(){
  var emoji = [
  {
    category: 'jeremy',
    name: 'smile'
  },
  {
    category: 'jeremy',
    name: 'smile_cap'
  },
  {
    category: 'jeremy',
    name: 'look'
  },
  {
    category: 'jeremy',
    name: 'look_cap'
  },
  {
    category: 'jeremy',
    name: 'sad'
  },
  {
    category: 'jeremy',
    name: 'thumbs'
  },
    {
      category: 'red-jeremy',
      name: 'eyebrow'
    }, {
      category: 'red-jeremy',
      name: 'smile'
    }, {
      category: 'red-jeremy',
      name: 'look'
    }, {
      category: 'red-jeremy',
      name: 'sad'
    }, {
      category: 'stickers',
      name: 'orgreave_a'
    }, {
      category: 'stickers',
      name: 'orgreave_b'
    }, {
      category: 'stickers',
      name: 'orgreave_c'
    }, {
      category: 'stickers',
      name: 'orgreave_d'
    }, {
      category: 'stickers',
      name: 'miners_solidarity'
    }, {
      category: 'stickers',
      name: 'miners_victory'
    }, {
      category: 'stickers',
      name: 'keep_left'
    }, {
      category: 'stickers',
      name: 'jez_we_can'
    }, {
      category: 'stickers',
      name: 'rather_fight_tories_a'
    },
    {
      category: 'stickers',
      name: 'rather_fight_tories_b'
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
