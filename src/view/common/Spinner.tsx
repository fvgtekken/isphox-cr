interface propsSipnner {
  className: string;
}

const Spinner = ({ className }: propsSipnner) => {
  return <div className={className}></div>;
};

export default Spinner;
