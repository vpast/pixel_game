var game = getGame("#scene");
var hero = getHero(game);

var typed;
var merchant;
var enemy;

var urlParams = new URLSearchParams(location.search);
var loc = urlParams.get('loc') || 'loc1';

initLocation(game, locations[loc]);

document.addEventListener('keydown', function(e) {
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

  if (e.code === 'KeyC') {
    var target = game.getObject(hero.getTarget());

    if(target.callback) {
      target.callback(hero);  
    }
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
          strings: merchant.strings,
          typeSpeed: 1,
          showCursor: false,
          fadeOut: false,
          bindInputFocusEvents: true
        });
      }
    }
  }

  if (e.code === 'KeyX') {
    var didHit = hero.attack(enemy);
    var hit = document.querySelector('#hit');
    var enemyTexture = document.querySelector('#enemy');

    if (didHit.checkPosition) {
      if (didHit.health == 0) {
        enemyTexture.style.visibility = 'hidden';
        hit.style.visibility = 'hidden';
        enemyCoords = (locations.loc1.npc['enemy'].coords);
        game.clearCell(enemyCoords);
      }
      else {
        if (didHit) {
          if (hit.style.visibility == 'visible') {
            hit.style.visibility = 'hidden';
          }
          else {
            hit.style.visibility = 'visible';
            setTimeout(() => {hit.style.visibility = 'hidden'}, 500);
          }
        }
      }
    }
    console.log(didHit.health);
  }
})