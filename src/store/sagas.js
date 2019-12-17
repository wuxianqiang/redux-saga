import * as types from './types'
import { put, delay, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('start')
}
export function* incrementAsync(action) {
  yield delay(1000) // 使用这个函数去阻塞Generator
  yield put({ type: types.INCREMENT, payload: action.payload }) // 1秒后发起一个 INCREMENT 的 action。
}
// 总结一下，incrementAsync Saga 通过 delay(1000) 延迟了 1 秒钟，然后 dispatch 一个叫 INCREMENT 的 action。

// takeEvery，用于监听所有的 INCREMENT_ASYNC action，并在 action 被匹配时执行 incrementAsync 任务。
export function* watchIncrementAsync() {
  yield takeEvery(types.ASYNC_INCREMENT, incrementAsync)
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}