import pingSound from './sounds/ping.wav'
import successSound from './sounds/success.wav'

const pingAudio = new Audio(pingSound)
const successAudio = new Audio(successSound)

export const playSound = (soundName) => {
  switch (soundName) {
    case 'ping':
      pingAudio.play()
      break
    case 'success':
      successAudio.play()
      break
    default:
      break
  }
}
