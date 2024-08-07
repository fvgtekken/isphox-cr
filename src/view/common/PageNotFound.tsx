import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz`);
  };

  return (
    <div>
      <div className='containerPageNotFound'>Page Not Found</div>
      <Button
        {...{
          onClick: () => {
            handleClick();
          },
          title: 'Back to Quiz',
          className: 'button',
        }}
      ></Button>
    </div>
  );
};
