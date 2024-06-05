import { myHeaders } from "./headers";
export async function getRecords(id) {


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

try {
  const response = await fetch(`https://api.discogs.com/masters/${id}`, requestOptions);
  const result = await response.json();
  return result
} catch (error) {
  console.error(error);
};

}


