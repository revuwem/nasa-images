import GalleryImage from "@/pages/Сollection/components/GalleryImage";

type Props = {
  items: { href: string }[] | undefined;
};

const Gallery: React.FC<Props> = ({ items }) => {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {items && items?.length ? (
        items.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank">
              <GalleryImage src={item.href} />
            </a>
          </li>
        ))
      ) : (
        <p>No photos found</p>
      )}
    </ul>
  );
};

export default Gallery;
