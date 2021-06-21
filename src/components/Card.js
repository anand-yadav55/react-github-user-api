import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.item.login}</h2>
      <img
        style={{ width: "100px", heigth: "100px", borderRadius: "50%" }}
        src={props.item.avatar_url}
      />
      <a href={props.item.html_url}>Visit</a>
      <p>{props.item.name}</p>
      <p>{props.item.location}</p>
    </div>
  );
}
