class DataError extends Error {}

export async function get(url) {
  const response = await fetch(url, {
    credentials: "include"
  });
  if(!response.ok) {
    throw new DataError("Failed to fetch");
  }
  const data = await response.json();
  return data;
}

export async function post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if(!response.ok) {
    const data = await response.json();
    throw new DataError(data.message);
  }
  return response.json();
}

export async function put(url, data){
  const response = await fetch(url, {
    method: 'PUT',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if(!response.ok) {
    const data = await response.json();
    throw new DataError(data.error);
  }
  return response.json();
}

export async function del(url, data){
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if(!response.ok) {
    const data = await response.json();
    throw new DataError(data.error);
  }
  return response.json();
}