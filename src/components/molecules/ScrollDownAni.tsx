import "../../style/scrollDownStyle.css";

type scrollDownAniProps = {
  onClick?: () => void;
};

const ScrollDownAni = ({ onClick }: scrollDownAniProps) => {
  return (
    <div className="scroll-down-container" onClick={onClick}>
      <div className="scroll-arrow" />
      <p className="scroll-text">Scroll down</p>
    </div>
  );
};

export default ScrollDownAni;
