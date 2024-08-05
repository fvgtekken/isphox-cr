interface PropsHeader {
  className: string;
  title: string;
}

const Header = ({ className, title }: PropsHeader) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
