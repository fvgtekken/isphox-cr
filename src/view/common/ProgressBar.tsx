import '../../styles/questionCount.css';

interface PropsBar {
  total: number;
  counter: number;
}

const ProgressBar = ({ total, counter }: PropsBar) => {
  const progress = (counter / total) * 100;

  return (
    <div className='questionCount'>
      <div className='progress-bar'>
        <div className='progress-bar-fill' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
