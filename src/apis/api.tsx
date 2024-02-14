import axios, {AxiosResponse} from 'axios';
import {PostType} from './post.interface';

// Configured Axios
const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 15000,
});

// Destructured Axios
const responseBody = (response: AxiosResponse) => response.data;

// Object to handle CRUD and returned Destructured Axios body
const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

// Object to handle request operations
export const Post = {
  getPosts: (): Promise<PostType[]> => request.get(`products`),
  getAPost: (id: number): Promise<PostType> => request.get(`products/${id}`),
  createPost: (post: PostType): Promise<PostType> =>
    request.post(`products`, post),
  updatePost: (post: PostType, id: number): Promise<PostType> =>
    request.put(`products/${id}`, post),
  deletePost: (id: number): Promise<void> => request.delete(`products/${id}`),
};
