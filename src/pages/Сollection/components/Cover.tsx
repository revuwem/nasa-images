type Props = {
  src: string;
};

const Cover: React.FC<Props> = ({ src }) => (
  <div className="h-64 sm:h-80 lg:h-full lg:max-h-[26rem] flex lg:col-start-2">
    <img src={src} alt="" className="w-full h-full object-cover" />
  </div>
);

export default Cover;
