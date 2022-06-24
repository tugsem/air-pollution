const getDetail = async (lat, lon) => {
  const response = await
  fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=2f9f94ed8b19efaa15c726bd6e401398`);
  const data = response.json();
  return data;
};

export default getDetail;
