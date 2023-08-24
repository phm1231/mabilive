import React, {useState} from 'react';
import Select from 'react-select' ;
import { useDispatch } from 'react-redux';

import makeSelectOption from '../../utils/makeSelectOption';


function OptionSelect(props){

    const dispatch = useDispatch();

    const emptyLevel = {value: '', label: '세공 옵션을 입력해주세요.'};

    const [levelList, setLevelList] = useState([emptyLevel]);
    const [levelKey, setLevelKey] = useState(0);

    const textLeftAlign = {
        textAlign: "left",
    };

    // 선택한 옵션 변경
    function changeOption(newOption, index){
        const newLevel = '';
        dispatch({ type: 'CHANGE_OPTION', index, newOption }); // 선택한 옵션 변경
        dispatch({ type: 'CHANGE_LEVEL', index, newLevel }); // 선택한 레벨 제거

        setLevelList(getLevelList(newOption)); // 레벨 리스트 새로 만듦
        setLevelKey(levelKey + 1); // 레벨 select 박스 새로고침
    }; 

    // 선택한 레벨 변경
    function changeLevel(newLevel, index){
        dispatch({ type: 'CHANGE_LEVEL', index, newLevel });
    }; 

    function getLevelList(option){
        if(props.table !== {} && option !== ''){
            const minLevel = Number(props.table[option.normalize("NFC")]["0"]);
            const maxLevel = Number(props.table[option.normalize("NFC")]["1"]);
            let levelArr = [];
            for(let i=minLevel; i<=maxLevel; i++){
                levelArr.push(i)
            }
            return makeSelectOption(levelArr);
        }
        else return [emptyLevel];
    }

    return(
        <div className="row">
            <div className="col-md-9 pe-0" style={textLeftAlign}>
                <Select placeholder="옵션" key={props.resetKey} options={props.optionList} onChange={(e) => changeOption(e.value, props.index)}/>
            </div>
            <div className="col-md-3">
                <Select placeholder="레벨" key={levelKey} options={levelList} onChange={(e) => changeLevel(e.value, props.index)}/>
            </div>
        </div>
    )
}

export default OptionSelect;