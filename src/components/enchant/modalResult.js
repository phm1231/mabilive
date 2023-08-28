import React  from 'react';
import Result from './result';
import ModalInput from './modalInput';

// 일반, 엘리트, 고대, 신성, 희대

function ModalResult(){

    return(
        <div className="modal-body container">
            <div className="row">
                <div className="col-md-6"><Result index={0}></Result></div>
                <div className="col-md-6"><ModalInput></ModalInput></div>

            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6"><Result index={1}></Result></div>
                <div className="col-md-6"><Result index={2}></Result></div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6"><Result index={3}></Result></div>
                <div className="col-md-6"><Result index={4}></Result></div>
            </div>
        </div>
    )
}

export default ModalResult;