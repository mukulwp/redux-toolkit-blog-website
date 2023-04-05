import React from "react";
import { Link } from "react-router-dom";

const RelatedPostItem = ({ relatedPost }) => {
  const {id, title, image, createdAt, tags } = relatedPost;
  return (
    <div className="card">
      <Link to={`/single-post/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link
          to="/single-post/1"
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.length > 0 &&
            tags.map((tag, index) => {
              return (
                <span key={index}>
                  #{tag}
                  {index !== tags.length - 1 && ","}{" "}
                </span>
              );
            })}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPostItem;
