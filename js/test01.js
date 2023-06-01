

function toggle (){
  gamingButtonElement = document.querySelector('.js-gaming-button')

  if(gamingButtonElement.classList.contains('is-toggled')) {gamingButtonElement.classList.remove('is-toggled')} else gamingButtonElement.classList.add('is-toggled')
}

// ------------------------------------------------------------

function gameSwitcher () {
  gamingButton = document.querySelector('.gamingButton')

  if (gamingButton.classList.contains('game-switched')){
    gamingButton.classList.remove('game-switched')
  } else gamingButton.classList.add('game-switched')
}

function musicSwitcher (){
  musicButton = document.querySelector('.musicButton')

  if (musicButton.classList.contains('music-switched')){
    musicButton.classList.remove('music-switched')
  } else musicButton.classList.add('music-switched')
}

function techSwitcher() {
  techButton = document.querySelector('.techButton')

  if (techButton.classList.contains('tech-switched')){
    techButton.classList.remove('tech-switched')
  } else techButton.classList.add('tech-switched')
}

// ------------------------------------------------------------

/*
function switcher (){
  gamingButton1 = document.querySelector('.gamingButton1')
  musicButton1 = document.querySelector('.gamingButton1')
  techButton1 = document.querySelector('.techButton1')

  if (gamingButton1.classList.contains('switched')){
    gamingButton1.classList.remove('switched')
  } else {
    gamingButton1.classList.add('switched')
    
  } 
}
*/

function switcher1 () {
  gamingButton1 = document.querySelector('.gamingButton1')
  musicButton1 = document.querySelector('.musicButton1')
  techButton1 = document.querySelector('.techButton1')

  if (gamingButton1.classList.contains('switched')){
    gamingButton1.classList.remove('switched')
  } else {
    gamingButton1.classList.add('switched')
    musicButton1.classList.remove('switched')
    techButton1.classList.remove('switched')
  }
}

function switcher2 () {
  gamingButton1 = document.querySelector('.gamingButton1')
  musicButton1 = document.querySelector('.musicButton1')
  techButton1 = document.querySelector('.techButton1')

  if (musicButton1.classList.contains('switched')){
    musicButton1.classList.remove('switched')
  } else {
    musicButton1.classList.add('switched')
    techButton1.classList.remove('switched')
    gamingButton1.classList.remove('switched')
  }
}

function switcher3 () {
  gamingButton1 = document.querySelector('.gamingButton1')
  musicButton1 = document.querySelector('.musicButton1')
  techButton1 = document.querySelector('.techButton1')

  if (techButton1.classList.contains('switched')){
    techButton1.classList.remove('switched')
  } else techButton1.classList.add('switched')
  musicButton1.classList.remove('switched')
  gamingButton1.classList.remove('switched')
}


