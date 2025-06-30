import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (userId) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return res.data.sort((a, b) => b.id - a.id); 
});

export const addTodo = createAsyncThunk('todos/addTodo', async ({ userId, title, completed }) => {
  const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
    userId, title, completed
  });
  return res.data; 
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos = [action.payload, ...state.todos]; 
      });
  },
});

export default todosSlice.reducer;
