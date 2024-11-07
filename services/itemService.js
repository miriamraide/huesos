export async function getItems() {
  const request = await fetch("https://localhost:3000/api/items");
  const items = await request.json();
  return items;
}

export async function getFavoriteItems() {
  const items = await getItems();
  return items.slice(0, 10);
}
