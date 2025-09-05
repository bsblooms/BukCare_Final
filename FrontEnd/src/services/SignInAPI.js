const API_BASE = "http://localhost:8000/api/v1";

export async function signIn(email, password) {
  try {
    const response = await fetch(`${API_BASE}/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      throw new Error(data.detail || "Invalid credentials");
    }

    return data; // JWT tokens
  } 
  
  catch (err) {
    // Network error (e.g., no server response)
    throw new Error("Network error. Please try again later.");
  }
}
