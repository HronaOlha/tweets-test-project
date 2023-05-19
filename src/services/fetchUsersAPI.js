import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchAll() {
  const response = await axios.get("/contacts");
  return response.data;
}

// export const fetchPopularMovies = async (controller) => {
//   const response = await axios.get(
//     `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
//     {
//       signal: controller.signal,
//     }
//   );
//   return response.data;
// };
