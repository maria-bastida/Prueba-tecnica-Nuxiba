import { useSelector } from 'react-redux';

export default function UserDetails() {
  const user = useSelector(state => state.users.selectedUser);

  if (!user) return null;

  return (
    <div className="card bg-light mb-4">
      <div className="card-body">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text mb-1"><strong>Username:</strong> {user.username}</p>
        <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
        <p className="card-text"><strong>Website:</strong> {user.website}</p>
      </div>
    </div>
  );
}
