import React from 'react';
import Data from '../../../../data/data.json';

function Faq() {
  let questions;
  Data.map((dataDetail)=>{ return (questions = (dataDetail.faq.questions))});
  return (
    <div className="App">
      {/* Remove below h1 after page is ready */}
      <h1>FAQ of Verkfærakistan</h1>
      <h1>Algengar Spurningar</h1>
        {questions.map((item, index)=>{
          return <div key={index}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        })}
    </div>
  );
}

export default Faq;