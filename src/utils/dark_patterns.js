export const updateDarkPatternState = () => {
  const params = new URLSearchParams(document.location.href.split('?')[1]);
  if (params) {
    if (params.get('enabled') === 'true') {
      localStorage.setItem('dark', true);
    } else if (params.get('enabled') === 'false') {
      localStorage.removeItem('dark');
    }
  }
};

export const finishTask = (siteName) => {
  const sites = JSON.parse(localStorage.getItem('sites'));
  const targetSite = sites.find((s) => s.name === siteName);
  targetSite.status = 'done';
  localStorage.setItem('sites', JSON.stringify(sites));
};
