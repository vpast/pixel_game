function getGame(selector) {
    var sceneEl = document.querySelector(selector);
    var map = [];
    for(let x=0; x<SCENE_X_MAX; x++) {
      map[x] = [];
      for(let y=0; y<SCENE_X_MAX; y++) {
        map[x][y] = 0;
      }
    }
    var addObject = function(object) {
      // objects.push(object);
      map[object.coords.x][object.coords.y] = object;
    }
    var isCellFree = function(coords) {
      if((typeof map[coords.x] === 'undefined') ||
        (typeof map[coords.x][coords.y] === 'undefined')) {
        return false;
      }
      return !map[coords.x][coords.y];
    }
    var getObject = function(coords) {
      return map[coords.x][coords.y];
    }

    var clearCell = function(coords) {
      map[coords.x][coords.y] = 0;
    }
  
    return {
      isCellFree,
      getObject,
      addObject,
      sceneEl,
      clearCell
    }
  }