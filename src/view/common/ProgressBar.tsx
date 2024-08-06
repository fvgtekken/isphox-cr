import '../../styles/progressBar.css';

interface PropsBar {
  total: number;
  counter: number;
}

const ProgressBar = ({ total, counter }: PropsBar) => {
  const progress = (counter / total) * 100;

  return (
    <div className='progress-bar'>
      <div className='progress-bar-fill' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
