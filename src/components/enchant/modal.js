import React, {useState, useEffect} from 'react';
import ModalResult from './modalResult';
import { useSelector } from 'react-redux';

function Modal(){
    const enchant = useSelector(state => state.enchant);

    const [isValidInput, setIsValidInput] = useState(false);

    useEffect(()=>{
        if(enchant !== '') setIsValidInput(true);
        else setIsValidInput(false);        
      }, [enchant])

    return(
        <div className="mt-5">
            <button type="button" className="btn btn-primary" disabled={!isValidInput} data-bs-toggle="modal" data-bs-target="#exampleModal">
                계산하기
            </button>
            
            {isValidInput &&
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <ModalResult></ModalResult>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary mx-auto" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Modal;