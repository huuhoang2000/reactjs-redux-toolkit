import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slice/index'
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    posts: postsSlice
  },
  middleware: [thunk]
})

export default store;
