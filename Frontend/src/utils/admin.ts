// Utilidades para el panel admin
const API_URL = "http://localhost:4000/api";

export function getToken(): string {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  }
  return "";
}

export function checkAuth(): void {
  if (typeof window !== "undefined") {
    const token = getToken();
    if (!token) {
      window.location.href = "/admin-login";
    }
  }
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  }
}

export async function fetchAPI(endpoint: string, options?: RequestInit): Promise<any> {
  const token = getToken();
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options?.headers,
    },
  });

  if (response.status === 401) {
    logout();
  }

  return response.json();
}
