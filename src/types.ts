type AssetImage = {
  href: string;
};

type Asset = {
  href: string;
  data: [
    {
      description: string;
      title: string;
      photographer?: string;
      keywords: string[];
      location?: string;
      nasa_id: string;
      media_type: "image";
      date_created: string;
      center?: string;
      secondary_creator?: string;
    }
  ];
  links: [
    {
      href: string;
      rel: "preview";
      render: "image";
    }
  ];
};

type Collection = {
  version: string;
  href: string;
  items: Asset[];
  metadata: {
    total_hits: 305;
  };
  links: {
    rel: "prev" | "next";
    prompt: "Previous" | "Next";
    href: string;
  }[];
};
