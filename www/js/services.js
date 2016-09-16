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
    },{
      category: 'stickers',
      name: 'junior_doctors',
      defaultText: "#JeremyForLabour",
      description: 'The British Medical Association has an ongoing dispute with the government over revised contacts for doctors working for the NHS. Doctors argue that the increased working hours placed on them and reduced breaks in the new contract mean that patients will be put at risk. Negotiations between the British Medical Association (BMA), NHS Employers and the government over new junior doctors\' contracts began in October 2013. In November 2015 members of the BMA voted to strike over their continuing disagreement with the government. Following two strikes in January and February 2016 the Secretary of State for Health, Jeremy Hunt, said he would introduce the new contract in August. This led to more strikes in March and April. At the start of May a “pause” in introducing the new contracts was agreed to and talks restarted. BMA members had their say on the new contract in a referendum on 5 July. 68% of those eligible took part in the vote. Of these, 42% voted to accept the new contract and 58% voted to reject it. Despite this, the Health Secretary announced that the contract had been agreed and in May would be phased in over 12 months, starting in October 2016. Further strike action is planned later this year.'
    }, {
      category: 'stickers',
      name: 'orgreave_a',
      defaultText: "#JeremyForLabour",
      description: 'In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers. Mick Antoniw, who represented several Welsh miners charged with offences at Orgreave, said the miners were "surrounded on all sides by police horses and police dogs and then savagely attacked by charge after charge of baton wielding police officers on horseback. Despite public calls at that time for an investigation, no inquiry ever took place. The tragedy of this failure is that not only have those miners who were arrested been denied the justice and vindication that would come from such an inquiry it meant that an early opportunity to investigate the culture and operation of the South Yorkshire Police never took place."'
    }, {
      category: 'stickers',
      name: 'orgreave_b',
      defaultText: "#JeremyForLabour",
      description: 'In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers. Mick Antoniw, who represented several Welsh miners charged with offences at Orgreave, said the miners were "surrounded on all sides by police horses and police dogs and then savagely attacked by charge after charge of baton wielding police officers on horseback. Despite public calls at that time for an investigation, no inquiry ever took place. The tragedy of this failure is that not only have those miners who were arrested been denied the justice and vindication that would come from such an inquiry it meant that an early opportunity to investigate the culture and operation of the South Yorkshire Police never took place."'
    }, {
      category: 'stickers',
      name: 'orgreave_c',
      defaultText: "#JeremyForLabour",
      description: 'In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers. Mick Antoniw, who represented several Welsh miners charged with offences at Orgreave, said the miners were "surrounded on all sides by police horses and police dogs and then savagely attacked by charge after charge of baton wielding police officers on horseback. Despite public calls at that time for an investigation, no inquiry ever took place. The tragedy of this failure is that not only have those miners who were arrested been denied the justice and vindication that would come from such an inquiry it meant that an early opportunity to investigate the culture and operation of the South Yorkshire Police never took place."'
    }, {
      category: 'stickers',
      name: 'orgreave_d',
      defaultText: "#JeremyForLabour",
      description: 'In 2012, the Orgreave Truth and Justice Campaign (OTJC) was formed to campaign for a public enquiry into the policing of the Battle of Orgreave - a violent confrontation on 18 June 1984 between police and pickets at a British Steel Corporation (BSC) coking plant in Orgreave, South Yorkshire. Following the success of the Hillsborough Justice Campaign, there’s been increasing pressure for a full report into the way the event was handled and the violence and intimidation used against workers. Mick Antoniw, who represented several Welsh miners charged with offences at Orgreave, said the miners were "surrounded on all sides by police horses and police dogs and then savagely attacked by charge after charge of baton wielding police officers on horseback. Despite public calls at that time for an investigation, no inquiry ever took place. The tragedy of this failure is that not only have those miners who were arrested been denied the justice and vindication that would come from such an inquiry it meant that an early opportunity to investigate the culture and operation of the South Yorkshire Police never took place."'
    }, {
      category: 'stickers',
      name: 'miners_solidarity',
      defaultText: "#JeremyForLabour",
      description: "The miners' strike of 1984-85 was a major industrial action to shut down the British coal industry in an attempt to prevent drastic and immediate colliery closures without alternative arrangements for work for those that would be left unemployed. It was led by the National Union of Mineworkers (NUM) against the British government of Prime Minister Margaret Thatcher, who called the miners \"the enemy within.\" Communities came together and supported the workers that held out, on strike for a year - providing food and supplies for those families who were without a pay check for over a year.Following a surprise pit closure in Cottonwood, workers balloted for strike action, followed by ballots in Yorkshire, Scotland, South Wales, Kent, most of the North East and parts of Lancashire. A national meeting was then called where delegates from every pit in the UK voted democratically to take strike action. Distortions, misinformation and smears confronted the miners. The strike was called illegal in the press and the NUM were wrongly accused of not balloting members to strike. Striking workers were met with violence from the police as part of a coordinated government strategy to disrupt the strike and almost 10,000 miners were arrested."
    }, {
      category: 'stickers',
      name: 'miners_victory',
      defaultText: "#JeremyForLabour",
      description: "The miners' strike of 1984-85 was a major industrial action to shut down the British coal industry in an attempt to prevent drastic and immediate colliery closures without alternative arrangements for work for those that would be left unemployed. It was led by the National Union of Mineworkers (NUM) against the British government of Prime Minister Margaret Thatcher, who called the miners \"the enemy within.\" Communities came together and supported the workers that held out, on strike for a year - providing food and supplies for those families who were without a pay check for over a year.Following a surprise pit closure in Cottonwood, workers balloted for strike action, followed by ballots in Yorkshire, Scotland, South Wales, Kent, most of the North East and parts of Lancashire. A national meeting was then called where delegates from every pit in the UK voted democratically to take strike action. Distortions, misinformation and smears confronted the miners. The strike was called illegal in the press and the NUM were wrongly accused of not balloting members to strike. Striking workers were met with violence from the police as part of a coordinated government strategy to disrupt the strike and almost 10,000 miners were arrested."
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
      description: 'Individuals have been prevented from further employment in construction and other sectors by employers who have operated a "blacklist" of trade unionists and others who they don\'t want to employ again. This has ruined their chances of future employment and ruined many lives.Many have been safety reps, whose only crimes have been to organise for safer workplaces.For many years the existence of these blacklists was denied, but in 2009 the conspiracy against construction workers on a breath-taking scale was exposed. A large-scale surveillance operation run by a company called The Consulting Association was being undertaken, collated files on thousands of construction workers, as well as academics and journalists, and sold the information to 44 construction companies. Campaigners at the Blacklisting Support Group after many years have fought for over £75million in compensation for workers - despite the industry initially denying the existence of the blacklist. Dave Smith, secretary of the Blacklist Support Group, said: "Despite all of the denials and attempts to cover up their secret conspiracy, the largest multinationals in the construction sector have been forced to pay out millions in compensation. Make no mistake, the High Court action is a historic victory for the trade union movement against the vicious face of free market capitalism."'
    },{
      category: 'stickers',
      name: 'blacklist_black_bg',
      defaultText: '#JeremyForLabour',
      description: 'Individuals have been prevented from further employment in construction and other sectors by employers who have operated a "blacklist" of trade unionists and others who they don\'t want to employ again. This has ruined their chances of future employment and ruined many lives.Many have been safety reps, whose only crimes have been to organise for safer workplaces.For many years the existence of these blacklists was denied, but in 2009 the conspiracy against construction workers on a breath-taking scale was exposed. A large-scale surveillance operation run by a company called The Consulting Association was being undertaken, collated files on thousands of construction workers, as well as academics and journalists, and sold the information to 44 construction companies. Campaigners at the Blacklisting Support Group after many years have fought for over £75million in compensation for workers - despite the industry initially denying the existence of the blacklist. Dave Smith, secretary of the Blacklist Support Group, said: "Despite all of the denials and attempts to cover up their secret conspiracy, the largest multinationals in the construction sector have been forced to pay out millions in compensation. Make no mistake, the High Court action is a historic victory for the trade union movement against the vicious face of free market capitalism."'
    },{
      category: 'stickers',
      name: 'blacklist_no_public_contracts',
      defaultText: '#JeremyForLabour',
      description: 'Individuals have been prevented from further employment in construction and other sectors by employers who have operated a "blacklist" of trade unionists and others who they don\'t want to employ again. This has ruined their chances of future employment and ruined many lives.Many have been safety reps, whose only crimes have been to organise for safer workplaces.For many years the existence of these blacklists was denied, but in 2009 the conspiracy against construction workers on a breath-taking scale was exposed. A large-scale surveillance operation run by a company called The Consulting Association was being undertaken, collated files on thousands of construction workers, as well as academics and journalists, and sold the information to 44 construction companies. Campaigners at the Blacklisting Support Group after many years have fought for over £75million in compensation for workers - despite the industry initially denying the existence of the blacklist. Dave Smith, secretary of the Blacklist Support Group, said: "Despite all of the denials and attempts to cover up their secret conspiracy, the largest multinationals in the construction sector have been forced to pay out millions in compensation. Make no mistake, the High Court action is a historic victory for the trade union movement against the vicious face of free market capitalism."'
    },{
      category: 'stickers',
      name: 'blacklist_secret_war',
      defaultText: '#JeremyForLabour',
      description: 'Individuals have been prevented from further employment in construction and other sectors by employers who have operated a "blacklist" of trade unionists and others who they don\'t want to employ again. This has ruined their chances of future employment and ruined many lives.Many have been safety reps, whose only crimes have been to organise for safer workplaces.For many years the existence of these blacklists was denied, but in 2009 the conspiracy against construction workers on a breath-taking scale was exposed. A large-scale surveillance operation run by a company called The Consulting Association was being undertaken, collated files on thousands of construction workers, as well as academics and journalists, and sold the information to 44 construction companies. Campaigners at the Blacklisting Support Group after many years have fought for over £75million in compensation for workers - despite the industry initially denying the existence of the blacklist. Dave Smith, secretary of the Blacklist Support Group, said: "Despite all of the denials and attempts to cover up their secret conspiracy, the largest multinationals in the construction sector have been forced to pay out millions in compensation. Make no mistake, the High Court action is a historic victory for the trade union movement against the vicious face of free market capitalism."'
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
