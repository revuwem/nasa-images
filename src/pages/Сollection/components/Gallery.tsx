import GalleryImage from "@/pages/Сollection/components/GalleryImage";

type Props = {
  items: { href: string }[];
};

const Gallery: React.FC<Props> = ({ items }) => {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {items && items?.length ? (
        items.map((item) => (
          <li>
            <GalleryImage src={item.href} />
          </li>
        ))
      ) : (
        <p>No photos found</p>
      )}
    </ul>
  );
};

export default Gallery;
