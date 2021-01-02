import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 1000,
});

export const fetchProjects = async () => {
  try {
    const { data: { projects } } = await instance.get('/projects');
    console.log(projects)
    return projects;
  } catch (error) {
    return { error }
  }
}

export const fetchBlogs = async () => {
  try {
    const { data: { blogs } } = await instance.get('/blogs');
    return blogs;
  } catch (error) {
    return { error }
  }
}