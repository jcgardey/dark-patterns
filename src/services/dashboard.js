import api from '../axios';

export const getAllWebsitesGroups = () =>
  api.get('/websites').then((response) => response.data);

export const createWebsiteGroup = (websiteGroup) =>
  api.post('/websites/new', websiteGroup);
