// currentTop - aktualna pozycja top
// currentLeft - aktualna pozycja top
// this.props.step - Krok ruchu, co ile pikseli
// this.props.border - obramowanie aplikacji
// this.props.size - rozmiar przesuwanego obiektu Ghots lub Pacman
// window.innerWidth - szerokość okna (window's layout viewport)
// window.innerHeight - wysokość okna

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
