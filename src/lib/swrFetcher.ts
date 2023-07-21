export const swrFetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res?.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error("Could not fetch data");
    }
  } catch (e) {
    throw new Error("Could not fetch");
  }
};
