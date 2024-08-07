interface PropsTitle {
  content: string;
  className?: string;
}

const Title = (props: PropsTitle) => {
  const { content, className } = props;
  return <h2 className={className}>{content}</h2>;
};

export default Title;
