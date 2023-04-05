import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ blog = {} }) => {
  const { id, title, image, tags, likes, createdAt, isSaved } = blog;
  return (
    <div className="lws-card">
      <Link to={`/single-post/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/single-post/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.length > 0 &&
            tags.map((tag, index) => {
              return (
                <span key={index}>
                  #{tag}
                  {index !== tags.length - 1 && ","}
                </span>
              );
            })}
        </div>

        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {isSaved && "Saved"} </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
