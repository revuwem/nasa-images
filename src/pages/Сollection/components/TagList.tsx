import Tag from "@/pages/Сollection/components/Tag";

type Props = {
  items: string[];
};

const TagList: React.FC<Props> = ({ items }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-3">
    {items && items.length
      ? items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))
      : null}
  </ul>
);

export default TagList;
