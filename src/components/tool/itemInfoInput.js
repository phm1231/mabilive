import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

import ranks from '../../constants/data/ranks';
import itemtypes from '../../constants/data/itemtypes';
import races from '../../constants/data/races';

import makeSelectOption from '../../utils/makeSelectOption';

function ItemInfoInput(props){

    const dispatch = useDispatch();

    const textLeftAlign = {
        textAlign: "left",
    };

    const optionRank = makeSelectOption(ranks, false);
    const optionItemType = makeSelectOption(itemtypes, false);
    const optionRace = makeSelectOption(races, false);

    const [selectedRank, setSelectedRank] = useState('');
    const [selectedItemType, setSelectedItemType] = useState('');
    const [selectedRace, setSelectedRace] = useState('');

    useEffect(() => {
        if(selectedRank !== '' && selectedItemType !== '' && selectedRace !== '') props.updateItemInput(true);
        else props.updateItemInput(false);
    }, [selectedRank, selectedItemType, selectedRace, props]);

    const changeItemInfo = (newItemInfo, index) => {
        dispatch({ type: 'CHANGE_ITEMINFO', index, newItemInfo });
        if(index === 0) setSelectedRank(newItemInfo);
        else if(index === 1) setSelectedItemType(newItemInfo);
        else if(index === 2) setSelectedRace(newItemInfo);
    }; 

    return(
        <div>
            <div class="row">
                <div class="col text-start mt-5 mb-1">
                    <h3>아이템 정보</h3>
                </div>
            </div>

            {/* Rank */}
            <div class="row bg-white pt-4">
                <div class="col-md-1"></div>
                <div class="col-md-10" style={textLeftAlign}>
                    <Select placeholder="랭크" options={optionRank} onChange={(e) => changeItemInfo(e.value, 0)}/>
                </div>
                <div class="col-md-1"></div>
            </div>

            {/* ItemType */}
            <div class="row bg-white">
                <div class="col-md-1"></div>
                <div class="col-md-10" style={textLeftAlign}>
                    <Select placeholder="아이템 타입" options={optionItemType} onChange={(e) => changeItemInfo(e.value, 1)}/>
                </div>
                <div class="col-md-1"></div>

            </div>

            {/* Race */}
            <div class="row bg-white pb-4">
                <div class="col-md-1"></div>
                <div class="col-md-10" style={textLeftAlign}>
                    <Select placeholder="착용 가능 종족" options={optionRace} onChange={(e) => changeItemInfo(e.value, 2)}/>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    )
}

export default ItemInfoInput;