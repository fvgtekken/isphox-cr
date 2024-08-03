const Result = (props: any) => {
  const { quizResult } = props;

  return (
    <>
      You prefer <strong>{quizResult}</strong>!
    </>
  );
};

export default Result;
