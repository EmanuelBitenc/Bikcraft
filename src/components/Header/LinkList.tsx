interface LinkListProps {
  href: string;
  label: string;
}

const LinkList: React.FC<LinkListProps> = (props) => {
  return (
    <a className="linkAfter " href={props.href}>
      <li>{props.label}</li>
    </a>
  );
};
export default LinkList;
