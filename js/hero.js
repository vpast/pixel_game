function getHero(game) {
  var heroEl = document.querySelector('#hero');
  var direction = "down";

  var coords = {
    x: 0,
    y: 0
  }

  var render = function () {
    heroEl.style.left = coords.x * CELL_SIZE + "px";
    heroEl.style.top = coords.y * CELL_SIZE + "px";

    heroEl.classList.remove("down");
    heroEl.classList.remove("top");
    heroEl.classList.remove("right");
    heroEl.classList.remove("left");

    heroEl.classList.add(direction);
  }

  var goToRight = function () {
    direction = "right";

    if (game.isCellFree({
      x: coords.x + 1,
      y: coords.y
    })) {
      coords.x += 1;
    }
    render();
  }

  var goToLeft = function () {
    direction = "left";

    if (game.isCellFree({
      x: coords.x - 1,
      y: coords.y
    })) {
      coords.x -= 1;
    }
    render();
  }

  var goToDown = function () {
    direction = "down";

    if (game.isCellFree({
      x: coords.x,
      y: coords.y + 1
    })) {
      coords.y += 1;
    }
    render();
  }

  var goToTop = function () {
    direction = "top";

    if (game.isCellFree({
      x: coords.x,
      y: coords.y - 1
    })) {
      coords.y -= 1;
    }
    render();
  }

  var getTarget = function () {
    var x = coords.x;
    var y = coords.y;

    switch (direction) {
      case "top":
        y -= 1;
        break;

      case "down":
        y += 1;
        break;

      case "right":
        x += 1;
        break;

      case "left":
        x -= 1;
        break;
    }

    return {
      x,
      y
    }
  }

  var intersect = function (npc) {
    var target = getTarget();
    return (npc.coords.x === target.x) && (npc.coords.y === target.y);

    // return (Math.abs(coords.x - npc.coords.x) <= 1) && (Math.abs(coords.y - npc.coords.y) <= 1);
  }


  var attack = function (npcEnemy, health) {
    var checkPosition = (Math.abs(coords.x - npcEnemy.coords.x) <= 1) && (Math.abs(coords.y - npcEnemy.coords.y) <= 1);

    var health = npcEnemy.health;

    if (checkPosition == true) {
      if (health > 0) {
        health = npcEnemy.health -= 1;
      }
      if (health == 0) {
        health = 0;
      }
    }

    return {
      health,
      checkPosition
    }
  }


  render();
  return {
    direction,
    coords,
    goToRight,
    goToLeft,
    goToDown,
    goToTop,
    intersect,
    getTarget,
    attack
  }
}