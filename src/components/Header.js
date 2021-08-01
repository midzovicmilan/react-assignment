import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  /*   const onClick = () => { // na testiranju je bilo dole onClick={onClick}
    console.log("click");
  }; */

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* na testiranju je bilo u zagradi onClick */}
    </header>
  );
};

Header.defaultProps = {
  title: "Imenik",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/*
css in react
const headingStyle = {
  color: "red",
  backgroundColor: "black",
}; */
export default Header;
