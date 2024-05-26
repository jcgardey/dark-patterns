import api from '../axios';

export const getAllWebsitesGroups = () =>
  api.get('/websites/groups').then((response) => response.data);

export const createWebsiteGroup = (websiteGroup) =>
  api.post('/websites/groups/new', websiteGroup);

export const deleteWebsiteGroup = (groupId) =>
  api.delete(`/websites/groups/${groupId}/delete`);

export const deleteUserSession = (sessionId) =>
  api.delete(`/user_sessions/${sessionId}/delete`);

export const getAllWebsites = () =>
  api.get('/websites').then((response) => response.data);

export const createWebsite = (websiteData) =>
  api.post('/websites/new', websiteData).then((response) => response.data);

export const updateWebsite = (id, websiteData) =>
  api.put(`/websites/${id}`, websiteData).then((response) => response.data);
