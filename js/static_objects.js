function getStaticObject(game, coords, elClass) {
    var staticEl = document.createElement('div');
    staticEl.classList.add('static-object');
    staticEl.classList.add(elClass);
    game.sceneEl.append(staticEl)

    staticEl.style.left = coords.x * CELL_SIZE + "px"
    staticEl.style.top = coords.y * CELL_SIZE + "px"

    game.addObject({coords});
}