import React from "react";
import Save from "./Save";
import Likes from "./Likes";

const DetailedPost = ({ blog } = {}) => {
  const {id, title, image, tags, likes, isSaved, description } = blog;
  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.length > 0 &&
            tags.map((tag, index) => (
              <span key={index}>
                #{tag}
                {index !== tags.length - 1 && ","}
              </span>
            ))}
        </div>
        <div className="btn-group">
         <Likes id={id} likes={likes} />

          <Save id={id} isSaved={isSaved} />
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPost;
