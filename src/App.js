import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
    const [posts, setPosts] = useState( [
      {id: 1, title: 'React Edication', body: 'Description of react'},
      {id: 2, title: 'Next Edication', body: 'Description of next'},
      {id: 3, title: 'Tailwind Edication', body: 'Description of tailwind'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
      if(filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localeCompare(filter.sort)) 
      }
      return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
      <MyModal></MyModal>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты по REACT' />
    </div>
  );
}

export default App;