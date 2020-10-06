import React from 'react';
import Table from '../Table';

function Remedy(props) {

  return (
    <div className="App container">
      <h1>RemedyPage of Verkfærakistan</h1>
      <h1>Úrræði</h1>
      <span>setja einhverjar upplýsingar hér</span>
      <Table data={props.data} />
    </div>
  );
}

export default Remedy;