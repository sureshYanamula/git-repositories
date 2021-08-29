import axios from 'axios';

export const getRepositories = async (text) =>
  await axios.get(`${process.env.REACT_APP_API}/search/repositories?q=${text}`);
