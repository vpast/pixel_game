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