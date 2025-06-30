import { useSelector } from 'react-redux';

export default function TodosList() {
  const todos = useSelector(state => state.todos.todos);
  if (!todos.length) return null;

  return (
    <div className="mt-4">
      <h2 className="mb-3">Todos</h2>
      <ul className="list-group">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? 'list-group-item-success' : ''
            }`}
          >
            <span>{todo.title}</span>
            <strong className={todo.completed ? 'text-success' : 'text-danger'}>
              {todo.completed ? '✓' : 'X'}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
