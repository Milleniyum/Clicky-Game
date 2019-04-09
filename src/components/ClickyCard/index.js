import React from "react";
import "./style.css";

function ClickyCard(props) {
  return <div
    onClick={() => props.cardClicked(props.id)}
    className={props.cardClass}
    style={{ backgroundImage: "url('" + props.image + "')" }} />
};

export default ClickyCard;
