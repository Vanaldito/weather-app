interface CityInfo {
  city: string;
}

export async function getCityInfoFromLocation(
  lat: number,
  lon: number
): Promise<CityInfo> {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  const res = await fetch(
    `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${lon}&accept-language=en&polygon_threshold=0.0`,
    options
  );
  const data = await res.json();

  return {
    city: data.address.city,
  };
}
