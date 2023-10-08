// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts, fetchPosts } from './slice/index';

function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.entities);
  console.log(JSON.stringify(posts)); //posts is object not array --> wrong
  const loading = useSelector((state) => state.posts.loading);
 
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    const newPost = {title: 'Huu Hoang', body: 'This is a Huu Hoang Post.' };
    dispatch(createPosts(newPost));
  }

  if (loading === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <button onClick={handleCreatePost}>Create Post</button>
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
