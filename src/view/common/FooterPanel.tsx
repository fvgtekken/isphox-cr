interface PropsFooter {
  className: string;
  content: string;
}

/*
footer-panel'
*/

const FooterPanel = ({ className, content }: PropsFooter) => {
  return (
    <div className={className}>
      <div>{content}</div>
    </div>
  );
};

export default FooterPanel;
