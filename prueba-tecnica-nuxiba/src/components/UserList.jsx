import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUser } from '../features/users/UsersSlice';

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const status = useSelector(state => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-list mt-3">
      {status === 'loading' ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        <ul className="list-unstyled">
          {users.map(user => (
            <li key={user.id} className="mb-2">
              <button
                onClick={() => dispatch(selectUser(user))}
                className="btn btn-outline-primary w-100 text-start"
              >
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
