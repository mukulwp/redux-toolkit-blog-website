import React from "react";
import GoHome from "../components/GoHome";
import DetailedPost from "../components/DetailedPost";
import RelatedPost from "../components/RelatedPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../features/blog/blogSlice";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {blog, isLoading, isError, error} = useSelector((state)=> state.blog);

  useEffect(()=> {
    dispatch(fetchBlog(id))
  },[dispatch, id]);

  //decide what to render
  let content;
  if(isLoading) content = <div>Post is loading...</div>;
  if(!isLoading && isError) content = <div>{error}</div>;
  if(!isLoading && !isError && !blog?.id){
    content = <div>No post found!</div>;
  }
  if(!isLoading && !isError && blog?.id){
    content = <DetailedPost blog={blog} />
  }

  return (
    <>
      <GoHome />
      <section className="post-page-container">
        {content}
        <RelatedPost tags={blog.tags} currentPostId={blog.id} />
      </section>
    </>
  );
};

export default SinglePost;
