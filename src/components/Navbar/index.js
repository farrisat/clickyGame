import React from "react";
import "./style.css";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
    width: "100%"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999"
  }
};



function Navbar(props) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Clicky Game</div>
  <p>{props.getCount()}</p>
    </div>
  );
}
 
 
export default Navbar;
