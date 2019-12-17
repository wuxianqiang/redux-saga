import * as types from './types'

let initState = { number: 0 }

export default function (state = initState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { number: action.payload }
    default:
      return state
  }
}