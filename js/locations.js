var loc1 = {
    npc: {
      'merchant': {
        strings: ['I think, this can be read! Until i try to include this into JavaScript.'],
        coords: {x:7, y:7}
      }
    },
    staticObjects: {
      'static-tree': [
        {x:9, y:7},
        {x:10, y:8},
        {x:9, y:9},
        {x:6, y:8},
        {x:3, y:7}
      ],
      'grave': [
        {x:10, y:10},
        {x:11, y:10},
        {x:12, y:10},
        {x:13, y:10},
        {x:14, y:10},
        {x:15, y:10},
        {x:10, y:11},
        {x:11, y:11},
        {x:12, y:11},
        {x:13, y:11},
        {x:14, y:11},
        {x:15, y:11},
      ]
    }
  }
  
  var loc2 = {
    npc: {
      'merchant': {
        strings: ['Greetings traveler!'],
        coords: {x:12, y:12}
      }
    },
    staticObjects: {
      'grave': [
        {x:9, y:7},
        {x:10, y:8},
        {x:9, y:9},
        {x:6, y:8},
        {x:3, y:7}
      ],
      'static-tree': [
        {x:10, y:10},
        {x:11, y:10},
        {x:12, y:10},
        {x:13, y:10},
        {x:14, y:10},
        {x:15, y:10},
        {x:10, y:11},
        {x:11, y:11},
        {x:12, y:11},
        {x:13, y:11},
        {x:14, y:11},
        {x:15, y:11},
      ]
    }
  }

  function initLocation(game, settings) {
    if (settings.npc) {
      for (let type of Object.keys(settings.npc)) {
        if (type === 'merchant') {
          merchant = getMerchant(game, settings.npc[type].coords, settings.npc[type].strings);
        }
      }
    }
  
    if (settings.staticObjects) {
      for (let type of Object.keys(settings.staticObjects)) {
        for (let objectSettings of settings.staticObjects[type]) {
          getStaticObject(game, objectSettings, type);
        }
      }
    }
  }