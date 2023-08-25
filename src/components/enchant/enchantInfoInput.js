import React from 'react';
import { useDispatch } from 'react-redux';

function EncahntInfoInput(){

    const dispatch = useDispatch();
    const options = ['F', 'E', 'D', 'C', 'B', 'A', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
  
    const changeEnchant= (newEnchant) => {;
        dispatch({ type: 'CHANGE_ENCHANT', newEnchant});
    }; 
  
    const rows = [];
    for (let i = 0; i < options.length; i += 5) {
      const rowOptions = options.slice(i, i + 5);
      rows.push(
        <div key={i} className="row text-start d-flex justify-content-center mx-auto">
          {rowOptions.map((option, index) => (
                <div className="form-check form-check-inline col-md-2 m-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id={option} value={option} onChange={(e) => changeEnchant(option)}/>
                    <label className="form-check-label" htmlFor={option}>{option + "랭크"}</label>
                </div>
          ))}
        </div>
      );
    }
  
    return (
      <div>
            <div className="row">
                <div className="col text-start mt-5 mb-1">
                    <h3>부여할 인챈트 랭크</h3>
                </div>
            </div>
            <div className="bg-white pt-4 pb-4">
                {rows}
            </div>  
      </div>
    );
}

export default EncahntInfoInput;