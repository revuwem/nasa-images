import CollectionCard from "@/components/CollectionCard";

const SearchResult = () => {
  return (
    <div className="col-span-full">
      {/* Total found number */}
      <p className="text-grey-dark mb-4">Total found: 654</p>
      {/* List of results */}
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
        <li>
          <CollectionCard
            data={{
              preview:
                "https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg",
              title: "Orion_Artemis-I_animation_b-roll_9_2021_FS",
              location: "Moon",
              author: "NASA / Liam Yanulis",
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default SearchResult;
