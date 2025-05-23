import api from '../axios';

const buildQueryParams = (filters) => {
  const queryParams = new URLSearchParams();
  Object.keys(filters).forEach((key) => {
    if (filters[key] !== '') {
      queryParams.append(key, filters[key]);
    }
  });
  return queryParams.toString();
};

export const getAllWebsitesGroups = () =>
  api.get('/websites/groups').then((response) => response.data);

export const getWebsiteGroupById = (id) =>
  api.get(`/websites/groups/${id}`).then((response) => response.data);

export const createWebsiteGroup = (websiteGroup) =>
  api.post('/websites/groups/new', websiteGroup);

export const updateWebsiteGroup = (id, websiteGroup) =>
  api.put(`/websites/groups/${id}`, websiteGroup);

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

export const deleteWebsite = (id) =>
  api.delete(`/websites/${id}`).then((response) => response.data);

export const downloadWebsiteSamples = (filter) =>
  api
    .get(`/samples/websites/export?filter=${filter}`, { responseType: 'blob' })
    .then((response) => response.data);

export const downloadUserSessions = (filters) =>
  api
    .get(`/user_sessions/export?${buildQueryParams(filters)}`, {
      responseType: 'blob',
    })
    .then((response) => response.data);

export const getAllUserSessions = (filters) =>
  api
    .get(`/user_sessions?${buildQueryParams(filters)}`)
    .then((response) => response.data);

export const assignFollowUpGroups = (assignments) =>
  api.put('/user_sessions/follow_up', { assignments });
