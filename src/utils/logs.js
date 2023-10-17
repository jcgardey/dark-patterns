export function sendLogs() {
  window.microMetricLogger.stopLogging();
  const token = localStorage.getItem('ux-analyzer-token') ?? null;
  if (!token) {
    return;
  }
  const body = {
    id: window.microMetricLogger.id,
    widget_logs: window.microMetricLogger.getAllMicroMetricsAsList(),
    errors: [],
    finished: true,
    time: window.microMetricLogger.time,
  };

  fetch(`http://localhost:8002/api/version/${token}/user_session/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
