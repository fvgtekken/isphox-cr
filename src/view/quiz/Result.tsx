interface PropsResult {
  quizResult: string;
}

const Result = (props: PropsResult) => {
  const { quizResult } = props;

  return (
    <>
      You prefer <strong>{quizResult}</strong>!
    </>
  );
};

export default Result;
