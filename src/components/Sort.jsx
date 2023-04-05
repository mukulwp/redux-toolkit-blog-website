import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedValue } from "../features/sort/sortSlice";

const Sort = () => {
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedValue(select));
  }, [dispatch, select]);
  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
