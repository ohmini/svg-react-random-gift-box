import {items} from '../constants/items'
import {resolveAfterMilliSeconds} from '../../utils/resolveAfterMilliSeconds'

export async function loadRewardRatio() {
  return await resolveAfterMilliSeconds(items, 500)
}
