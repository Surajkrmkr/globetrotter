const API_BASE = "http://localhost:3000"; // your backend URL

export const fetchRandomQuestion = async () => {
  const response = await fetch(`${API_BASE}/api/v1.0/game/destination`);
  return response.json();
};

export const submitAnswer = async (payload) => {
  const response = await fetch(`${API_BASE}/api/v1.0/game/answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const registerUser = async (userName) => {
  const response = await fetch(`${API_BASE}/api/v1.0/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName }),
  });
  return response.json();
};