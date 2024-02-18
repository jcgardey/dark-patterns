import api from '../axios';

export const createSample = (website, isDark, questionnaire, data) => {
  const sessionId = localStorage.getItem('session_id');
  return api.post(
    `/user_sessions/${sessionId}/websites/${website}/samples/new`,
    {
      dark: isDark,
      questionnaire,
      sample_data: data,
    }
  );
};

export const createUserSession = ({ email, country }) =>
  api.post('/user_sessions/new', { email, country });

export const getWebsitesStatus = (session_id) =>
  api
    .get(`/user_sessions/${session_id}/websites/status`)
    .then((response) => response.data);
