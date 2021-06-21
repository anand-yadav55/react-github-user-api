import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
export default function App() {
  const [allCard, setAllCard] = useState([]);
  function addNew(cardData) {
    console.log(cardData);
    setAllCard(allCard.concat(cardData));
  }
  return (
    <div>
      <Form onSubmit={addNew} />
      {allCard.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
