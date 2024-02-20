const API_BASE_URL = "https://65a6ae9974cf4207b4f0a100.mockapi.io/artItems";

export const fetchArtItems = async () => {
  const response = await fetch(`${API_BASE_URL}/artItems`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const createArtItem = async (item) => {
  const response = await fetch(`${API_BASE_URL}/artItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

export const updateArtItem = async (id, item) => {
  const response = await fetch(`${API_BASE_URL}/artItems/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

export const deleteArtItem = async (id) => {
  await fetch(`${API_BASE_URL}/artItems/${id}`, {
    method: "DELETE",
  });
};
