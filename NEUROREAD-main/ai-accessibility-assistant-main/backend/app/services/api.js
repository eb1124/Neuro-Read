const API_BASE = "https://your-backend.onrender.com";

export const simplifyText = async (text) => {
  const response = await fetch(`${API_BASE}/assistive/simplify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
};