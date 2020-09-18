import React from 'react';
import Data from '../../../../data/data.json';

function Remedy() {
  let remedy;
  Data.map((remedyDetail)=>{ return remedy = (remedyDetail.remedy.remedy)});
  console.log(remedy)
  return (
    <div className="App container">
      <h1>RemedyPage of Verkfærakistan</h1>
      <h1>Úrræði</h1>
      <span>setja einhverjar upplýsingar hér</span>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Úrræði</th>
            <th>Röskun</th>
            <th>Staðsetning</th>
            <th>símanúmer</th>
            <th>Linkur</th>
          </tr>
        </thead>
        <tbody>
        {remedy.map((item, index)=>{
          if(item.link === "") {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.disorder}</td>
                <td>{item.location}</td>
                <td>{item.phone}</td>
                <td>-</td>
              </tr>
            )
          }
          else {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.disorder}</td>
                <td>{item.location}</td>
                <td>{item.phone}</td>
                <td><a className="btn btn-success" href={item.link} role="button">Linkur</a></td>
              </tr>
            )
          }
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Remedy;