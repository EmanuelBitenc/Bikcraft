import "./header.scss";
interface LinkListProps {
  href: string;
  label: string;
}

const LinkList: React.FC<LinkListProps> = ({ href, label }) => {
  return (
    <a className="linkAfter " href={href}>
      <li>{label}</li>
    </a>
  );
};
export default LinkList;
