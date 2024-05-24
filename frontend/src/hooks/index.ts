import { BACKEND_URL } from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useBlog = ({ id }: { id: string }) => {
 const [blog, setBlog] = useState({
  loading: false,
  post: {},
  error: ''
 });

 useEffect(() => {
  setBlog((curr) => {
   return { ...curr, loading: true };
  });

  axios
   .get(`${BACKEND_URL}/blog/${id}`, {
    headers: {
     Authorization: localStorage.getItem('jwtToken')
    }
   })
   .then((response) => {
    setBlog({
     loading: false,
     post: response.data.post,
     error: ''
    });
   })
   .catch((error) => {
    setBlog({
     loading: false,
     post: {},
     error: error
    });
   });
 }, [id]);
 return blog;
};

export const useBlogs = () => {
 const [blogs, setBlogs] = useState({
  loading: false,
  data: [],
  error: ''
 });

 useEffect(() => {
  setBlogs((curr) => {
   return { ...curr, loading: true };
  });

  axios
   .get(`${BACKEND_URL}/blog/bulk`, {
    headers: {
     Authorization: localStorage.getItem('jwtToken')
    }
   })
   .then((response) => {
    setBlogs({
     loading: false,
     data: response.data,
     error: ''
    });
   })
   .catch((error) => {
    setBlogs({
     loading: false,
     data: [],
     error: error
    });
   });
 }, []);

 return blogs;
};
