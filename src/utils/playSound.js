import pingSound from './sounds/ping.wav'
import successSound from './sounds/success.wav'

const audio = new Audio()

export const playSound = (soundName) => {
  switch (soundName) {
    case 'ping':
      audio.src = pingSound
      audio.play()
      break
    case 'success':
      audio.src = successSound
      audio.play()
      break
    default:
      break
  }
}
