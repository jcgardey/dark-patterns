import api from '../axios';

export const createSample = (website, isDark, questionnaire, data) => {
  const sessionId = localStorage.getItem('session_id');
  return api.post(`/user_sessions/${sessionId}/samples/new`, {
    website,
    dark: isDark,
    questionnaire,
    sample_data: data,
  });
};

export const createUserSession = ({ email, country }) =>
  api.post('/user_sessions/new', { email, country });
