
const album= async (albumId, id, title,image = "") => {
  const albumes = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&id=${id}&title=${title}&thumbnailUrl=${image}`;

  const response = await fetch(albumes);
  const data = await response.json();
  return data;

};

export default album;