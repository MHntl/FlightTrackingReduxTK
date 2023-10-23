export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.51265",
    bl_lng: "25.651482",
    tr_lat: "42.168884",
    tr_lng: "44.284293",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "X", // Use your API key instead of X
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/detail",
  headers: {
    "X-RapidAPI-Key": "X", // Use your API key instead of X
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
