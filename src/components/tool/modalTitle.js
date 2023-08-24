import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

function ModalTitle(){
    const options = useSelector(state => state.options);
    const levels = useSelector(state => state.levels);
    const imgStyle={
      height: "45px",
      width: "50px"
  };

    return(
      <div className="row">
          <div className="col ms-0">
              <div className="d-flex align-items-center">
                  <img className="image-fluid" style={imgStyle} src={"img/thumbnail.png"} alt={"thumbnail"}></img>
                  <div className="text-start d-inline-block fs-4 fw-bold ">
                      <font className="ps-1" color="#333333">{"입력한 세공 옵션"}</font>
                  </div>
              </div>
          </div>
          {
            options.map((option, index)=>(
              option !== '' &&
              <div className="row ms-0 mt-4">
                <div className="text-start fs-6 fw-bold">{option + ' ' + levels[index] + '레벨 이상'}</div>
              </div>
            ))
          }
      </div>
  );
}

/*
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

export default ModalTitle;