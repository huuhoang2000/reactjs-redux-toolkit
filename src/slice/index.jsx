// features/posts/postsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


//perform a GET request
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

//perform a POST request
export const createPosts = createAsyncThunk('posts/createPosts', async (post) => {
  const  response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = 'failed';
        state.entities = action.error.message;
      })
      .addCase(createPosts.fulfilled, (state, action)  => {
        // state.entities = action.payload; => replacing the entire state.entities with the new post ==> posts is an object, not an array. 
        state.entities.push(action.payload);
      })
  },
});

export default postsSlice.reducer;
