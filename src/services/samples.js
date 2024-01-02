import api from "../axios";

export const createSample = (website, isDark, questionnaire, data) =>
  api.post("/samples/new", {
    website,
    dark: isDark,
    questionnaire,
    sample_data: data,
  });
