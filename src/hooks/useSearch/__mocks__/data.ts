export const assetsMock = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/PIA18906/collection.json",
        data: [
          {
            center: "JPL",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 1,
    },
    links: [
      {
        rel: "next",
        prompt: "Next",
        href: "http://images-api.nasa.gov/search?page=2",
      },
    ],
  },
};

export const assetsMockLastPage = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/PIA18906/collection.json",
        data: [
          {
            center: "NASA",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 1,
    },
    links: [
      {
        rel: "prev",
        prompt: "Previous",
        href: "http://images-api.nasa.gov/search?page=3",
      },
    ],
  },
};
