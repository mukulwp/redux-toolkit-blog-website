import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import relatedPostsReducer from '../features/relatedPosts/relatedPostsSlice';
import sortReducer from '../features/sort/sortSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedPosts: relatedPostsReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
});
