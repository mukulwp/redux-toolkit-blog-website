import React from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../features/blogs/blogsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const {blogs, isLoading, isError, error} = useSelector((state)=> state.blogs);
  const {sortValue} = useSelector((state)=> state.sort);
  const {checkedValue} = useSelector((state)=> state.filter);

  useEffect(() => {
    dispatch(fetchBlogs({sortValue, checkedValue}));
  }, [dispatch, sortValue, checkedValue]);

  //decide what to render
  let content;
  if(isLoading) content = <div>Posts are loading...</div>;
  if(!isLoading && isError) content = <div>{error}</div>;
  if(!isLoading && !isError && blogs?.length === 0){
    content = <div>No posts found!</div>;
  }
  if(!isLoading && !isError && blogs?.length > 0){
    content = blogs.map((blog)=> (
      <PostCard key={blog.id} blog={blog} />
    ))
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Posts;
