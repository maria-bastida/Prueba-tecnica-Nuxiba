import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (userId) => {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  const postsWithComments = await Promise.all(posts.data.map(async post => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    return { ...post, comments: res.data };
  }));
  return postsWithComments;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
extraReducers: builder => {
  builder
    .addCase(fetchPosts.pending, () => [])  
    .addCase(fetchPosts.fulfilled, (_, action) => action.payload);
},
});


export default postsSlice.reducer;
