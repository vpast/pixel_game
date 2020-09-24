var game = getGame("#scene");
var hero = getHero(game);
var merchant = getMerchant(game, {x:7, y:7});
var typed;

// var location = {
//   npc: {
//     merchant: {dialog: ''}
//   },
//   staticObjects: {
//     'static-tree': [
//       {x:9, y:7},
//       {x:10, y:8},
//       {x:9, y:9}
//     ]
//   }
// }

getStaticObject(game, {x:9, y:7}, "static-tree");
getStaticObject(game, {x:10, y:8}, "static-tree");
getStaticObject(game, {x:9, y:9}, "static-tree");

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
})