import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/UsersSlice';
import postsReducer from '../features/posts/PostsSlice';
import todosReducer from '../features/todos/TodosSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    todos: todosReducer,
  },
});
