import { configureStore } from '@reduxjs/toolkit'
import errorFindReducer from './error-find-exam-slice'

const store = configureStore({
  reducer: {
    exam: errorFindReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {exam: ExamState }
export type AppDispatch = typeof store.dispatch

export default store;