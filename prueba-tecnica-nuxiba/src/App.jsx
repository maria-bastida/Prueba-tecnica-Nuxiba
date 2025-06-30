import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import PostsList from './components/PostsList';
import TodosList from './components/TodosList';
import AddTodoForm from './components/AddTodoForm';
import { fetchPosts } from './features/posts/PostsSlice';
import { fetchTodos } from './features/todos/TodosSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const dispatch = useDispatch();
  const selectedUser = useSelector(state => state.users.selectedUser);
  const [viewMode, setViewMode] = useState('');

  const handleViewPosts = () => {
    if (selectedUser) {
      dispatch(fetchPosts(selectedUser.id));
      setViewMode('posts');
    }
  };

  const handleViewTodos = () => {
    if (selectedUser) {
      dispatch(fetchTodos(selectedUser.id));
      setViewMode('todos');
    }
  };

  useEffect(() => {
    setViewMode('');
  }, [selectedUser]);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* Sidebar */}
        <aside className="col-md-4">
          <div className="bg-white rounded shadow p-4">
            <h3 className="mb-3">Users</h3>
            <UserList />
          </div>

          <div className="bg-white rounded shadow p-4 mt-4">
            <h3 className="mb-3">New Task</h3>
            <AddTodoForm />
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-md-8">
          <div className="bg-white rounded shadow p-4 mb-4">
            <h3 className="mb-3">Information</h3>
            <UserDetails />
          </div>

          {selectedUser && (
            <div className="d-flex gap-3 mb-3">
              <button className="btn btn-primary" onClick={handleViewPosts}>
                Posts
              </button>
              <button className="btn btn-secondary" onClick={handleViewTodos}>
                Todos
              </button>
            </div>
          )}

          <div>
            {viewMode === 'posts' && <PostsList />}
            {viewMode === 'todos' && <TodosList />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
