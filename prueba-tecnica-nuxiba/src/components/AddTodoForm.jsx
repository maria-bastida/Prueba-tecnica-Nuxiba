import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../features/todos/TodosSlice';

export default function AddTodoForm() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const user = useSelector(state => state.users.selectedUser);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !user) return;
    dispatch(addTodo({ userId: user.id, title, completed }));
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container mt-4 p-4 rounded bg-white border shadow-sm">
      <h3 className="mb-3 fs-4 text-dark">Add New Todo</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="completedCheck"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="completedCheck">
          Completed
        </label>
      </div>

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}
