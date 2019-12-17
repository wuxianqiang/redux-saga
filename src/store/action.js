import * as types from './types'
export default {
  increment(count) {
    return { type: types.INCREMENT, payload: count }
  },
  asyncIncrement(count) {
    return { type: types.ASYNC_INCREMENT, payload: count }
  }
}