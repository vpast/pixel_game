function getMerchant(game, coords, strings) {
    var merchantEl = document.createElement('div');
    merchantEl.setAttribute('id', 'merchant')
    game.sceneEl.append(merchantEl)

    var render = function() {
        merchantEl.style.left = coords.x * CELL_SIZE + "px"
        merchantEl.style.top = coords.y * CELL_SIZE + "px"
    }


    game.addObject({coords});
    render();
    return {
      coords,
      strings
    }
}

function getEnemy(game, coords) {
    var enemyEl = document.createElement('div');
    enemyEl.setAttribute('id', 'enemy')

    var hitEl = document.getElementById('hit');
    game.sceneEl.append(enemyEl, hitEl)

    var health = 3;

    var render = function() {
        enemyEl.style.left = coords.x * CELL_SIZE + "px"
        enemyEl.style.top = coords.y * CELL_SIZE + "px"

        hitEl.style.left = coords.x * CELL_SIZE + "px"
        hitEl.style.top = (coords.y - 1) * CELL_SIZE + "px"
    }


    game.addObject({coords});
    render();
    return  {
        coords,
        health
    }
}