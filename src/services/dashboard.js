import api from '../axios';

export const getAllWebsitesGroups = () =>
  api.get('/websites').then((response) => response.data);
