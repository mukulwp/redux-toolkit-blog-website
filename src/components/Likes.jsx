import React from "react";
import { useState } from "react";
import { axiosInstance } from "../utils/axios";

const Likes = ({ id, likes }) => {
  const [likesCount, setLikesCount] = useState(likes);
  const handleLikes = async () => {
    try {
      const response = await axiosInstance.patch(`/blogs/${id}`, {
        likes: likesCount + 1,
      });
      setLikesCount(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="like-btn" id="lws-singleLinks" onClick={handleLikes}>
      <i className="fa-regular fa-thumbs-up"></i> {likesCount}
    </button>
  );
};

export default Likes;
