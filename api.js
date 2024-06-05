
export async function getRecords(id) {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("User-Agent", "PostmanDiscogs/1.0");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

try {
  const response = await fetch(`https://api.discogs.com/releases/${id}?current_abbr=US`, requestOptions);
  const result = await response.text();
  return result
} catch (error) {
  console.error(error);
};

}


