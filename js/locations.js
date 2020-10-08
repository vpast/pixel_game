var locations = {
  loc1: {
    npc: {
      'merchant': {
        strings: ['I think, this can be read! Until i try to include this into JavaScript.'],
        coords: { x: 7, y: 7 }
      },
      'enemy': {
        coords: { x: 3, y: 3 }
      }
    },
    staticObjects: {
      'static-tree': [
        { x: 9, y: 7 },
        { x: 10, y: 8 },
        { x: 9, y: 9 },
        { x: 6, y: 8 },
        { x: 3, y: 7 }
      ],
      'grave': [
        { x: 10, y: 10 },
        { x: 11, y: 10 },
        { x: 12, y: 10 },
        { x: 13, y: 10 },
        { x: 14, y: 10 },
        { x: 15, y: 10 },
        { x: 10, y: 11 },
        { x: 11, y: 11 },
        { x: 12, y: 11 },
        { x: 13, y: 11 },
        { x: 14, y: 11 },
        { x: 15, y: 11 },
      ]
    },
    portals: {
      'door': [
        { x: 24, y: 1, location: "loc2" }
      ]
    }
  },
  loc2: {
    npc: {
      'merchant': {
        strings: ['Greetings traveler!'],
        coords: { x: 12, y: 12 }
      }
    },
    staticObjects: {
      'grave': [
        { x: 9, y: 7 },
        { x: 10, y: 8 },
        { x: 9, y: 9 },
        { x: 6, y: 8 },
        { x: 3, y: 7 }
      ],
      'static-tree': [
        { x: 10, y: 10 },
        { x: 11, y: 10 },
        { x: 12, y: 10 },
        { x: 13, y: 10 },
        { x: 14, y: 10 },
        { x: 15, y: 10 },
        { x: 10, y: 11 },
        { x: 11, y: 11 },
        { x: 12, y: 11 },
        { x: 13, y: 11 },
        { x: 14, y: 11 },
        { x: 15, y: 11 },
      ]
    },
    portals: {
      'door': [
        { x: 0, y: 2, location: "loc1" }
      ]
    }
  }
}

function getPortal(game, settings, elClass) {
  var portalEl = document.createElement('div');
  var coords = {
    x: settings.x,
    y: settings.y
  }
  var loc = settings.location;
  portalEl.classList.add('static-object');
  portalEl.classList.add(elClass);
  game.sceneEl.append(portalEl)

  portalEl.style.left = coords.x * CELL_SIZE + "px"
  portalEl.style.top = coords.y * CELL_SIZE + "px"

  game.addObject({coords, callback: function() {
    location.replace(`/index.html?loc=${loc}`);
  }});
}

function initLocation(game, settings) {
  if (settings.npc) {
    for (let type of Object.keys(settings.npc)) {
      if (type === 'merchant') {
        merchant = getMerchant(game, settings.npc[type].coords, settings.npc[type].strings);
      }
      if (type === 'enemy') {
        enemy = getEnemy(game, settings.npc[type].coords);
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

  if (settings.portals) {
    for (let type of Object.keys(settings.portals)) {
      for (let objectSettings of settings.portals[type]) {
        getPortal(game, objectSettings, type);
      }
    }
  }
}