import React from "react";
import RelatedPostItem from "./RelatedPostItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedPosts } from "../features/relatedPosts/relatedPostsSlice";

const RelatedPost = ({ tags, currentPostId }) => {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector((state) => state.relatedPosts);

  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
  }, [dispatch, tags, currentPostId]);

   //decide what to render
   let content;
   if(isLoading) content = <div>Related posts are loading...</div>;
   if(!isLoading && isError) content = <div>{error}</div>;
   if(!isLoading && !isError && relatedPosts?.length ===0){
     content = <div>No related posts found!</div>;
   }
   if(!isLoading && !isError && relatedPosts?.length > 0){
     content = relatedPosts.map((relatedPost)=> (
        <RelatedPostItem key={relatedPost.id} relatedPost={relatedPost} />
     ))
   }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {content}
      </div>
    </aside>
  );
};

export default RelatedPost;
