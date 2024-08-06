interface PropsTitle {
  content: string;
  clasName?: string;
}

const Title = (props: PropsTitle) => {
  const { content } = props;
  return <h2 className='question'>{content}</h2>;
};

export default Title;
