import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import checkInput from '../../utils/checkInput';
import ModalResult from './modalResult';

function Modal(){
    const options = useSelector(state => state.options);
    const levels = useSelector(state => state.levels);

    const [isValidInput, setIsValidInput] = useState(false);

    useEffect(()=>{
      setIsValidInput(checkInput(options, levels));
    }, [options, levels])

    return(
        <div className="mt-5">
            <button type="button" className="btn btn-primary" disabled={!isValidInput} data-bs-toggle="modal" data-bs-target="#exampleModal">
                계산하기
            </button>
            
            {isValidInput &&
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <ModalResult></ModalResult>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                  </div>
              </div>
            </div>
            }
        </div>
    )
}
export default Modal;