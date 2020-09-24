function getHero(game) {
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
      if (!game.isCellFree({
        x: coords.x + 1,
        y: coords.y
      })) {
        return;
      }
      coords.x += 1;
      render();
    }
  
    var goToLeft = function() {
        if (!game.isCellFree({
          x: coords.x - 1,
          y: coords.y
        })) {
          return;
        }
        coords.x -= 1;
        render();
    }
  
    var goToDown = function() {
      if (!game.isCellFree({
        x: coords.x,
        y: coords.y + 1
      })) {
        return;
      }
      coords.y += 1;
      render();
    }
  
    var goToTop = function() {
      if (!game.isCellFree({
        x: coords.x,
        y: coords.y - 1
      })) {
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