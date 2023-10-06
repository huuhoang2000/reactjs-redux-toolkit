// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './slice/index';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.entities);
  
  console.log(JSON.stringify(posts, null, 2));
  
  const loading = useSelector((state) => state.posts.loading);

  
 
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading === 'loading') return <p>Loading...</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
