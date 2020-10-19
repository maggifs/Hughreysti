import React from 'react';

function getQuestions(data) {
  return data.map((dataDetail)=>{ return dataDetail.faq.questions});
}

function Faq(props) {
  let questions = getQuestions(props.data);
  
  return (
    <div className="App container">
      <h1>Algengar Spurningar</h1>
        {questions[0].map((item, index)=>{
          return <div key={index}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        })}
    </div>
  );
}

export default Faq;