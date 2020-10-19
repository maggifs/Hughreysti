import React from 'react';

function getRules(data) {
  return data.map((rulesDetail)=>{ return rulesDetail.gamerules.rules});
}

function GameRules(props) {
  let rules = getRules(props.data);

  return (
    <div className="App container">
      <h1>Leikreglur</h1>
      {rules[0].map((item, index)=>{
        // Use replace below when #text has been fixed
        //let a = item.content.replace('\n', '<br>');
        return <div key={index}>
          <h4>{item.title}</h4>
          {/* TODO: fix when content or title is x long it becomes #text in DOM */}
          <p>{item.content}</p>
        </div>
      })}
    </div>
  );
}

export default GameRules;