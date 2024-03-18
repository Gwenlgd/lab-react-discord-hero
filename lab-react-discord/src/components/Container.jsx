import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
      <img />
    </div>
  );
};

export default Container;
