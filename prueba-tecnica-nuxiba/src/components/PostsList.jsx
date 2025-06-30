import { useSelector } from 'react-redux';

export default function PostsList() {
  const posts = useSelector(state => state.posts);
  if (!posts.length) return null;

  return (
    <div className="mt-4">
      <h2 className="mb-4">Posts</h2>

      {posts.map(post => (
        <div key={post.id} className="mb-4 p-3 border rounded bg-light">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <ul className="list-unstyled ps-3">
            {post.comments.map(comment => (
              <li key={comment.id} className="mb-2 bg-white p-2 rounded shadow-sm">
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
