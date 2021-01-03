import axios from 'axios'
import { IBlog, IProject } from '../interfaces';

const instance = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 1000,
});

export const fetchProjects = async () => {
  try {
    const { data: { projects } }: { data: any, projects: IProject[] } = await instance.get('/projects');
    return projects;
  } catch (error) {
    return { error }
  }
}

export const fetchBlogs = async () => {
  try {
    const { data: { blogs } }: { data: any, blogs: IBlog[] } = await instance.get('/blogs');
    return blogs;
  } catch (error) {
    return { error }
  }
}