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

  var intersect = function(npc) {
    if (coords.x == npc.coords.x - 1 && coords.y == npc.coords.y ||
        coords.x == npc.coords.x + 1 && coords.y == npc.coords.y ||
        coords.y == npc.coords.y - 1 && coords.x == npc.coords.x ||
        coords.y == npc.coords.y + 1 && coords.x == npc.coords.x) {
      alert("NPC here!");
    }
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



// client code
var hero = getHero();
var merchant = getMerchant();



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
    hero.intersect(merchant);
  }
})