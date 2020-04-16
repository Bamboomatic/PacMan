// currentTop - aktualna pozycja top
// currentLeft - aktualna pozycja top
// this.props.step - Krok ruchu, co ile pikseli
// this.props.border - obramowanie aplikacji
// this.props.size - rozmiar przesuwanego obiektu Ghots lub Pacman
// window.innerWidth - szerokość okna (window's layout viewport)
// window.innerHeight - wysokość okna

// For Ghost.js and Pacman.js
// up:
{
  top: Math.max(currentTop - this.props.step, 0),
  left: currentLeft
}

// right:
{
  top: currentTop,
  left: Math.min(currentLeft + this.props.step, window.innerWidth - this.props.border - this.props.size)
}

// down
{
  top: Math.min(currentTop + this.props.step, window.innerHeight - this.props.size - this.props.border - this.props.topScoreBoard),
  left: currentLeft
}

// left:
{
  top: currentTop,
  left: Math.max(currentLeft - this.props.step, 0)
}


// Amount of food (Board.js):
this.amountOfFood = (
  (window.innerWidth - this.props.border - this.props.foodSize)
    * (window.innerHeight - this.props.border - this.props.topScoreBoard)
) / (this.props.foodSize * this.props.foodSize);


// food rendering (Board.js)
let foods = [];
let currentTop = 0;
let currentLeft = 0;

for (let i = 0; i < this.amountOfFood; i++) {
  if (currentLeft + this.props.foodSize >= window.innerWidth - this.props.border) {
    currentTop += this.props.foodSize;
    currentLeft = 0;
  }

  if (currentTop + this.props.foodSize >= (window.innerHeight - this.props.border - this.props.topScoreBoard)) {
    break;
  }

  const position = { left: currentLeft, top: currentTop };
  currentLeft = currentLeft + this.props.foodSize;
  foods.push(<Food ref={this['food' + i]} position={position} key={i} />);
}

// lookForEat (Board.js)
lookForEat() {
  const pacmanX = this.pacmanRef.current.state.position.left;
  const pacmanY = this.pacmanRef.current.state.position.top;
  const pacmanSize = this.pacmanRef.current.props.size

  const pacmanLastX = pacmanX + pacmanSize / 2;
  const pacmanLastY = pacmanY + pacmanSize / 2;

  for (let i = 1; i <= this.amountOfFood; i++) {
    let currentFood = this['food' + i].current;
    if (currentFood) {
      const currentFoodX = currentFood.state.position.left;
      const currentFoodY = currentFood.state.position.top;
      const currentFoodSize = currentFood.props.foodSize;
      const currentFoodLastX = currentFoodX + currentFoodSize / 2;
      const currentFoodLastY = currentFoodY + currentFoodSize / 2;

      if (
        (pacmanX >= currentFoodX && pacmanX <= currentFoodLastX)
        || (pacmanLastX >= currentFoodX && pacmanLastX <= currentFoodLastX)) {
        if ((pacmanY >= currentFoodY && pacmanY <= currentFoodLastY)
          || (pacmanLastY >= currentFoodY && pacmanLastY <= currentFoodLastY)) {
          if (!currentFood.state.hidden) {
            currentFood.ate();
            this.props.increase();
          }
        }
      }
    }
  }
}
