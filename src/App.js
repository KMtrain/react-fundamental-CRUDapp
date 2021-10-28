import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    setIsPostLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setPosts(json)
    })
    setIsPostLoading(false);
    
  }, []);

 
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          defaultValue="Sort by"
          options={[
            { value: "title", name: "by title" },
            { value: "body", name: "by content" },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>{searchQuery}</div>
      {isPostLoading
          ? <h1>Download</h1>
          : <PostList remove={removePost} posts={posts} title={"Posts list 1"} />

      
        }
    </div>
  );
}

export default App;
