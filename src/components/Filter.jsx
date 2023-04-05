import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/filter/filterSlice";

const Filter = () => {
  const [checkedValue, setCheckedValue] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStatus(checkedValue));
  }, [dispatch, checkedValue]);
  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            value="all"
            className="radio"
            onChange={(e) => setCheckedValue(e.target.value)}
            checked={checkedValue === "all"}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            value="saved"
            className="radio"
            onChange={(e) => setCheckedValue(e.target.value)}
            checked={checkedValue === "saved"}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
