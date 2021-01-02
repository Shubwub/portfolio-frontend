import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 1000,
});

export const fetchProjects = async () => {
  console.log('fetching method');
  try {
    const { data: { projects } } = await instance.get('/projects');
    console.log(projects)
    return projects;
  } catch (error) {
    return { error }
  }
}