type Props = {
  src: string;
};

const GalleryImage: React.FC<Props> = ({ src }) => {
  return (
    <div className="h-64 lg:h-96">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default GalleryImage;
