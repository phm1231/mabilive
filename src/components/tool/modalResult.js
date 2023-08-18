import React  from 'react';
import Result from './result';

function ModalResult(){

    return(
        <div className="modal-body container">
            <div className="row">
                <div className="col-md-6"><Result index={0}></Result></div>
                <div className="col-md-6"><Result index={1}></Result></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6"><Result index={2}></Result></div>
                <div className="col-md-6"><Result index={3}></Result></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6"><Result index={4}></Result></div>
                <div className="col-md-6"><Result index={5}></Result></div>
            </div>
        </div>
    )
}
/*
                <div className="d-flex mp-0" style={lineStyle}>
                    <div className="vr"></div>
                </div>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {options[index]}
              {levels[index]}
              {itemInfo[index]}
            </li>
          ))}
        </ul>
*/
export default ModalResult;