import Constants from "expo-constants";

const { localIp, serverPort } = Constants.expoConfig?.extra ?? {};

const BASE_URL = `http://${localIp}:${serverPort}/api`;

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;

  const url = `${BASE_URL}${endpoint}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text}`);
  }

  return response.json();
}
