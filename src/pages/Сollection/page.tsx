import clsx from "clsx";
import Author from "@/pages/Сollection/components/Author";
import Gallery from "@/pages/Сollection/components/Gallery";
import TagList from "@/pages/Сollection/components/TagList";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading/Heading";
import DateText from "@/pages/Сollection/components/DateText";
import Location from "@/pages/Сollection/components/Location";
import { useParams } from "react-router-dom";
import { useCollection } from "@/hooks/useCollection";
import { formatDate } from "@/lib/helpers";
import BackButton from "@/pages/Сollection/components/BackButton";
import Layout from "@/components/Layout";

const Collection = () => {
  const { id } = useParams();
  const {
    data,
    collection,
    isLoading,
    isCollectionLoading,
    error,
    isCollectionError,
  } = useCollection(id);

  const {
    title,
    keywords,
    photographer,
    secondary_creator,
    date_created,
    location,
    description,
  } = data?.data[0] ?? {};

  return (
    <Layout>
      {isLoading && <Paragraph>Loading...</Paragraph>}
      {error && (
        <Paragraph>
          <span className="text-red-500 font-bold">{error?.message}</span>
        </Paragraph>
      )}
      {data && (
        <>
          <div className="col-span-full mb-12">
            <BackButton />
          </div>
          <section
            className={clsx(
              "col-span-full grid gap-6 mb-12",
              "sm:col-span-4",
              "lg:col-span-full"
            )}
          >
            <div className="grid gap-4 lg:col-start-1 lg:row-start-1">
              <Heading as="h2">{title}</Heading>
              {keywords && keywords.length > 0 && <TagList items={keywords} />}
              <div className="mb-3 flex flex-col justify-between gap-3">
                <Author>
                  {photographer ?? secondary_creator ?? "unknown"}
                </Author>
                <DateText>
                  {date_created ? formatDate(date_created) : "unknown"}
                </DateText>
                <Location>{location ?? "unknown"}</Location>
              </div>
              <Paragraph>{description}</Paragraph>
            </div>
          </section>
          <section className="col-span-full">
            {isCollectionLoading && (
              <Paragraph>Loading collection...</Paragraph>
            )}
            {isCollectionError && (
              <Paragraph>Could not load collection images</Paragraph>
            )}
            {!isCollectionLoading && <Gallery items={collection} />}
          </section>
        </>
      )}
    </Layout>
  );
};

export default Collection;
