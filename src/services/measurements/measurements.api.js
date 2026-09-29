import { apiRequest } from "../api.js";

function getMeasurementsPath(clientId) {
  return `/clients/${encodeURIComponent(clientId)}/measurements`;
}

export function getMeasurements(clientId, signal) {
  return apiRequest(getMeasurementsPath(clientId), {
    method: "GET",
    signal,
  });
}

export function createMeasurement(clientId, measurementData) {
  return apiRequest(getMeasurementsPath(clientId), {
    method: "POST",
    body: measurementData,
  });
}
