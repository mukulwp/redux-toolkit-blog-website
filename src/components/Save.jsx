import React from "react";
import { useState } from "react";
import { axiosInstance } from "../utils/axios";

const Save = ({ id, isSaved }) => {
  const [saved, setSaved] = useState(isSaved);
  const handleSave = async () => {
    try {
      const response = await axiosInstance.patch(`/blogs/${id}`, {
        isSaved: true,
      });
      setSaved(response.data.isSaved);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className={`${saved && "active"} save-btn`}
      id="lws-singleSavedBtn"
      onClick={handleSave}
    >
      <i className="fa-regular fa-bookmark"></i> {saved ? "Saved" : "Save"}
    </button>
  );
};

export default Save;
