import clsx from "clsx";
import Author from "@/pages/Сollection/components/Author";
import Cover from "@/pages/Сollection/components/Cover";
import Gallery from "@/pages/Сollection/components/Gallery";
import TagList from "@/pages/Сollection/components/TagList";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading/Heading";
import DateText from "@/pages/Сollection/components/DateText";

const Collection = () => {
  return (
    <>
      <section
        className={clsx(
          "col-span-full grid gap-6 mb-12",
          "sm:col-span-4",
          "lg:col-span-full lg:grid-cols-2 lg:gap-12 lg:mb-32"
        )}
      >
        <Cover src="https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~thumb.jpg" />
        <div className="grid gap-4 lg:col-start-1 lg:row-start-1">
          <Heading as="h2">
            Apollo 11 Mission image - Astronaut Edwin Aldrin poses beside th
          </Heading>
          <TagList
            items={["Moon", "observe", "enthusiast", "Observe the Moon Night"]}
          />
          <div className="mb-3 flex flex-col justify-between gap-3">
            <Author>NASA/GSFC/Arizona State University</Author>
            <DateText>1969-07-21</DateText>
          </div>
          <Paragraph>
            AS11-40-5874 (20 July 1969) --- Astronaut Edwin E. Aldrin Jr., lunar
            module pilot of the first lunar landing mission, poses for a
            photograph beside the deployed United States flag during Apollo 11
            extravehicular activity (EVA) on the lunar surface. The Lunar Module
            (LM) is on the left, and the footprints of the astronauts are
            clearly visible in the soil of the moon. Astronaut Neil A.
            Armstrong, commander, took this picture with a 70mm Hasselblad lunar
            surface camera. While astronauts Armstrong and Aldrin descended in
            the LM the \"Eagle\" to explore the Sea of Tranquility region of the
            moon, astronaut Michael Collins, command module pilot, remained with
            the Command and Service Modules (CSM) \"Columbia\" in lunar orbit.
          </Paragraph>
        </div>
      </section>
      <section className="col-span-full">
        <Gallery
          items={[
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium.jpg",
            },
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium_1.jpg",
            },
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium_2.jpg",
            },
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium_3.jpg",
            },
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium_4.jpg",
            },
            {
              href: "http://images-assets.nasa.gov/video/Apollo 11 Landing Profile/Apollo 11 Landing Profile~medium_5.jpg",
            },
          ]}
        />
      </section>
    </>
  );
};

export default Collection;
