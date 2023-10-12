import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: '',
    text: '',
    image: ''
  });

  useEffect(() => {
    const storedPostList = localStorage.getItem('postList');
    if (storedPostList) {
      setPostList(JSON.parse(storedPostList));
    }
  }, []);

  const updateAndSavePostList = (newPostList) => {
    setPostList(newPostList);
    localStorage.setItem('postList', JSON.stringify(newPostList));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostList = [...postList, post];
    updateAndSavePostList(newPostList);
    setPost({
      title: '',
      text: '',
      image: ''
    });
  }

return (
    <>
      <h1>Опублікувати пост</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Заголовок</label>
        <input 
          type="text"
          id="title" 
          name="title"
          placeholder="Введіть заголовок"
          value={post.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="text">Текст</label>
        <textarea 
          type="text"
          id="text" 
          name="text"
          placeholder="Введіть текст"
          value={post.text}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Зображення</label>
        <input 
          type="text"
          id="image" 
          name="image"
          placeholder="Введіть посилання на зображення"
          value={post.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Опублікувати</button>
      </form>
    </>
  )
}

export default App
