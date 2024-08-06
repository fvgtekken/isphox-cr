import { ReactNode } from 'react';

interface PropsHeader {
  className: string;
  children: ReactNode; // Mejor opción en lugar de 'any'
}

const MainTitle = ({ children, className }: PropsHeader) => {
  return <div className={className}>{children}</div>;
};

export default MainTitle;
