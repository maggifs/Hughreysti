import React from 'react';

function getTeacherInformation(data) {
  return data.map((dataDetail)=>{ return dataDetail.brochure.information});
}

function getInformation(data) {
  return data.map((dataDetail)=>{ return dataDetail.brochure.brochure})
}

function TeacherBrochure(props) {
  let teacherInformation = getTeacherInformation(props.data);
  let information = getInformation(props.data);

  return (
    <div className="App container">
      <h1>Kennarabæklingur</h1>
      <p>{teacherInformation}</p>
      <div id="brochureList" role="tablist">
        {information[0].map((item, index)=>{
            return <div className="list=group" key={index}>
                <button className="list-group-item list-group-item-action" >
                  <h4>{item.title}</h4>
                  <div className="hidden" >{item.content}</div>
                </button>
          </div>
        })}
      </div>
    </div>
  );
}

export default TeacherBrochure;