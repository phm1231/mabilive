import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';

import makeSelectOption from '../../utils/makeSelectOption';
import createTable from '../../utils/createTable';

function OptionInfoInput(props){

    const dispatch = useDispatch();
    const itemInfo = useSelector(state => state.itemInfo); // 0, 1, 2

    const [levelList, setLevelList] = useState({value: '', label: '선택 불가'});
    const [optionList, setOptionList] = useState({value: '', label: '선택 불가'});

    const textLeftAlign = {
        textAlign: "left",
    };
    
    const changeOption = (newOption, index) => {
        dispatch({ type: 'CHANGE_OPTION', index, newOption });
    }; 

    const changeLevel = (newLevel, index) => {
        dispatch({ type: 'CHANGE_LEVEL', index, newLevel });
    }; 

    return(
        <div>
            {/* title */}
            <div class="row">
                <div class="col text-start mt-5 mb-1">
                    <h3>세공 옵션 입력</h3>
                </div>
            </div>

            {/* Option 1 */}
            <div class="row bg-white pt-4">
                <div class="col-md-9 pe-0" style={textLeftAlign}>
                    <Select isDisabled={props.isDisabled} placeholder="첫 번째 옵션" options={optionList} onChange={(e) => changeOption(e.value, 0)}/>
                </div>
                <div class="col-md-3">
                    <Select isDisabled={props.isDisabled} placeholder="레벨" options={levelList} onChange={(e) => changeLevel(e.value, 0)}/>
                </div>
            </div>

            {/* Option 2 */}
            <div class="row bg-white">
                <div class="col-md-9 pe-0" style={textLeftAlign}>
                    <Select isDisabled={props.isDisabled} placeholder="선택 안 함" options={optionList} onChange={(e) => changeOption(e.value, 1)}/>
                </div>
                <div class="col-md-3">
                    <Select isDisabled={props.isDisabled} placeholder="레벨" options={levelList} onChange={(e) => changeLevel(e.value, 1)}/>
                </div>
            </div>

            {/* Option 3 */}
            <div class="row bg-white pb-4">
                <div class="col-md-9 pe-0" style={textLeftAlign}>
                    <Select isDisabled={props.isDisabled} placeholder="선택 안 함" options={optionList} onChange={(e) => changeOption(e.value, 2)}/>
                </div>
                <div class="col-md-3">
                    <Select isDisabled={props.isDisabled} placeholder="레벨" options={levelList} onChange={(e) => changeLevel(e.value, 2)}/>
                </div>
            </div>
        </div>
    )
}

export default OptionInfoInput;