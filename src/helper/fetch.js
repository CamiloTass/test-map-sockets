const BASE_URL = "https://api.github.com";

export const fetchUser = async (endpoint, data, method) => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    if (method === "GET") {
      const response = await fetch(url);
      return await response.json();
    } else {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    }
  } catch (error) {
    return "123333";
  }
};

export const fetchWitchToken = async (endpoint, data, method = "GET") => {
  try {
    const url = `${BASE_URL}/${endpoint}`;

    if (method === "GET") {
      const response = await fetch(url, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      return await response.json();
    } else {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "x-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    }
  } catch (error) {}
};
