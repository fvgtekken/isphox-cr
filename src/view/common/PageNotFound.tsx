import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product`);
  };

  return (
    <div>
      <div className='containerPageNotFound'>Page Not Found</div>
      <Button
        {...{
          onClick: () => {
            handleClick();
          },
          title: 'Back to Prodcuts',
          className: 'button',
        }}
      ></Button>
    </div>
  );
};
