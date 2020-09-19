// library
var CELL_SIZE = 50;
var SCENE_X_MAX = 15;
var SCENE_Y_MAX = 15;
function getHero() {
  var heroEl = document.querySelector('#hero');

  var coords = {
    x: 0,
    y: 0
  }

  var render = function() {
    heroEl.style.left = coords.x * CELL_SIZE + "px";
    heroEl.style.top = coords.y * CELL_SIZE + "px";
  }

  var goToRight = function() {
    if (coords.x > SCENE_X_MAX - 1) {
      return;
    }
    coords.x += 1;
    render();
  }

  var goToLeft = function() {
      if (coords.x < 1) {
        return;
      }
      coords.x -= 1;
      render();
  }

  var goToDown = function() {
    if (coords.y > SCENE_Y_MAX - 1) {
      return
    }
    coords.y += 1;
    render();
  }

  var goToTop = function() {
    if (coords.y < 1) {
        return;
    }
    coords.y -= 1;
    render();
  }

  // const intersect = (Math.abs(coords.x-npc.x) <= 1) && (Math.abs(coords.y-npc.y) <= 1) 
  var intersect = function(npc) { 
    return (Math.abs(coords.x-npc.coords.x) <= 1) && (Math.abs(coords.y-npc.coords.y) <= 1); 
    // if (coords.x == npc.coords.x - 1 && coords.y == npc.coords.y ||
    //     coords.x == npc.coords.x + 1 && coords.y == npc.coords.y ||
    //     coords.y == npc.coords.y - 1 && coords.x == npc.coords.x ||
    //     coords.y == npc.coords.y + 1 && coords.x == npc.coords.x) {
    //     return true;
    // }
    // return false;
  }


  render();
  return {
    coords,
    goToRight,
    goToLeft,
    goToDown,
    goToTop,
    intersect
  }
}

function getMerchant() {
    var merchantEl = document.querySelector('#merchant');

    var coords = {
        x: 7,
        y: 7
    }

    var render = function() {
        merchantEl.style.left = coords.x * CELL_SIZE + "px"
        merchantEl.style.top = coords.y * CELL_SIZE + "px"
    }

    render();
    return {
      coords
    }
}

function menuNavigation() {

}


// client code
var hero = getHero();
var merchant = getMerchant();
var typed;

document.addEventListener('keydown', function(e) {
  console.log(e.code);

  if (e.code === 'ArrowUp') {
    hero.goToTop();
  }

  if (e.code === 'ArrowDown') {
    hero.goToDown();
  }

  if (e.code === 'ArrowLeft') {
    hero.goToLeft();
  }

  if (e.code === 'ArrowRight') {
    hero.goToRight();
  }


  if (e.code === 'KeyZ') {
    var dialogue = document.querySelector('#dialogue_box');
    var didIntersect = hero.intersect(merchant);

    if (didIntersect) {
      if (dialogue.style.visibility == 'visible') {
        dialogue.style.visibility = 'hidden';
        typed.destroy();
      }
      else {
        dialogue.style.visibility = 'visible';
        typed = new Typed('#text', {
          strings: ["I think, this can be read! Until i try to include this into JavaScript."],
          typeSpeed: 1,
          showCursor: false,
          fadeOut: false,
          bindInputFocusEvents: true
        });
      }
    }
  }
  console.log(typed);
})