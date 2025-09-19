const ACCESS_KEY = "nyholRx4sdil-dOCG_7AyE-GjIs0uzO1os4Ty5bCEEI";

export const getImages = async (length = 10) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=pc&per_page=${length}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  const data = await res.json();

  return data.results.map((item) => ({
    title: item.alt_description || "PC Image",
    url: item.urls.small,
  }));
};
