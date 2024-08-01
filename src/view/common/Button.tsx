interface Props {
  onClick?: (arg?: any) => void;
  params?: any;
  title: string;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ onClick, title, type = 'button', children, className }: Props) => {
  return (
    <button type={`${type}`} className={`${className}`} onClick={onClick}>
      <span> {children}</span>
      <span> {title}</span>
    </button>
  );
};
