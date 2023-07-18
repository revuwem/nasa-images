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
    <div>
      <div className="h-64 flex mb-3">
        <img src={preview} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl text-grey-light font-bold mb-4">{title}</h3>
      <div className="flex justify-between">
        <p className="text-grey-dark">{location}</p>
        <p className="text-grey-dark">{author}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
