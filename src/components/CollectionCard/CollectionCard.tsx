type Props = {
  data: {
    preview: string;
    title: string;
    location: string;
    author: string;
  };
};

const CollectionCard: React.FC<Props> = (props) => {
  const { preview, title, location, author } = props.data;
  return (
    <div className="group">
      <div className="h-72 flex mb-3 overflow-hidden">
        <img
          src={preview}
          alt=""
          className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover:scale-100"
        />
      </div>
      <h3 className="text-xl text-grey-light font-bold mb-4 transition group-hover:text-blue-500">
        {title}
      </h3>
      {author && <p className="text-grey-dark mb-2">{author}</p>}
      {location && <p className="text-grey-dark italic">{location}</p>}
    </div>
  );
};

export default CollectionCard;
