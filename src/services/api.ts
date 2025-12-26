const BASE_URL = `http://${process.env.REACT_NATIVE_LOCAL_IP}:${process.env.REACT_NATIVE_SERVER_PORT}`;

type RequestOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
