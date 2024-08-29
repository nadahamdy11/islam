
export const exerciseOption = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "462ac5182dmshac9ddc076f826ffp19ec79jsn90958f8e2827",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
