import React, {useState, useEffect} from 'react';
import OptionSelect from './optionSelect';
import { useDispatch, useSelector } from 'react-redux';

import makeSelectOption from '../../utils/makeSelectOption';
import createTable from '../../utils/createTable';

function OptionInfoInput(){

    const dispatch = useDispatch();
    const itemInfo = useSelector(state => state.itemInfo);
    const emptyOption = {value: '', label: '아이템 정보를 확인해주세요.'};

    const [table, setTable] = useState({});
    const [optionList, setOptionList] = useState( [emptyOption] );

    const [resetKey, SetResetKey] = useState(0);

    // 아이템 정보가 변경됨
    useEffect(() => {
         // 새로운 옵션 테이블 설정
        const newTable = createTable(itemInfo);
        setTable(newTable);

        // 옵션 테이블에 맞는 선택 리스트 생성
        if(!newTable || Object.keys(newTable).length === 0) setOptionList([emptyOption]);
        else setOptionList(makeSelectOption(Object.keys(newTable))); 

        // redux에서 옵션, 레벨값 초기화
        dispatch({ type: 'INITIALIZE_OPTION' });
        dispatch({ type: 'INITIALIZE_LEVEL' });

        // select 박스 초기화
        SetResetKey(resetKey + 1);
    }, [itemInfo]);


    return(
        <div>
            {/* title */}
            <div class="row">
                <div class="col text-start mt-5 mb-1">
                    <h3>세공 옵션 입력</h3>
                </div>
            </div>
            {/* Option 1 */}
            <div class="row pt-4 bg-white">
                <OptionSelect key={resetKey} table={table} optionList={optionList} index={0}></OptionSelect>
            </div>
            {/* Option 2 */}
            <div class="row bg-white">
                <OptionSelect key={resetKey} table={table} optionList={optionList} index={1}></OptionSelect>
            </div>
            {/* Option 3 */}
            <div class="row pb-4 bg-white">
                <OptionSelect key={resetKey} table={table} optionList={optionList} index={2}></OptionSelect>
            </div>
        </div>
    )
}

export default OptionInfoInput;