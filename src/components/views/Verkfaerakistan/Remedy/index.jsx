import React from 'react';

function getRemedy(data) {
  return data.map((remedyDetail)=>{ return remedyDetail.remedy.remedy});
}

function Remedy(props) {
  let remedy = getRemedy(props.data);

  return (
    <div className="App container">
      <h1>RemedyPage of Verkfærakistan</h1>
      <h1>Úrræði</h1>
      <span>setja einhverjar upplýsingar hér</span>
      <div className="table-responsive">
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
          {remedy[0].map((item, index)=>{
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
    </div>
  );
}

export default Remedy;