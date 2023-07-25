const Button = ({ id, color }) => {
  return (
    <div
      className={`button _${id}`}
      id={id}
      style={{
        background: color
      }}
    >
      <span>Hover Me!</span>
      <div className="back"></div>
    </div>
  );
};

export default Button;
