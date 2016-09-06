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
  },{
    category: 'jeremy',
    name: 'closed_fist',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'wave',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'obi_smile',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'obi_look',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'obi_look_ls',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'obi_closed_fist_ls',
    defaultText: "#JeremyForLabour",
    description: ""
  },{
    category: 'jeremy',
    name: 'heart_smile',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'heart_smile_cap',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'heart_wave',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'heart_single_thumb',
    defaultText: "#JeremyForLabour",
    description: ""
  },
  {
    category: 'jeremy',
    name: 'heart_thumbs',
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
      category: 'red-jeremy',
      name: 'look_cap',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'smile_no_glasses',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_smile',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_happy',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_eyebrow',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_sad',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_shock',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'red-jeremy',
      name: 'cartoon_angry',
      defaultText: "#JeremyForLabour",
      description: ""
    }, {
      category: 'stickers',
      name: 'jc4pm',
      defaultText: '#JeremyForLabour',
      description: ''
    }, {
      category: 'stickers',
      name: 'orgreave_a',
      defaultText: "#JeremyForLabour",
      description: "In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers."
    }, {
      category: 'stickers',
      name: 'orgreave_b',
      defaultText: "#JeremyForLabour",
      description: "In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers."
    }, {
      category: 'stickers',
      name: 'orgreave_c',
      defaultText: "#JeremyForLabour",
      description: "In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers."
    }, {
      category: 'stickers',
      name: 'orgreave_d',
      defaultText: "#JeremyForLabour",
      description: "In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers."
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
    },{
      category: 'stickers',
      name: 'blacklist_white_bg',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'blacklist_black_bg',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'blacklist_no_public_contracts',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'blacklist_secret_war',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'liberty',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'you_know',
      defaultText: '#JeremyForLabour',
      description: ''
    },{
      category: 'stickers',
      name: 'momentum',
      defaultText: '#JeremyForLabour',
      description: ''
    },
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
