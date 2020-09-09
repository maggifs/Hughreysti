import React from 'react';
import Data from '../../../../data/data.json';

function GameRules() {
  let rules;
  Data.map((rulesDetail)=>{ return rules = (rulesDetail.gamerules.rules)});
  return (
    <div className="App">
      {/* Remove below h1 after page is ready */}
      <h1>GameRulesPage of Verkfærakistan</h1>
      <h1>Leikreglur</h1>
      {rules.map((item, index)=>{
        // Use replace below when #text has been fixed
        let a = item.content.replace('\n', '<br>');
        console.log(typeof a)
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