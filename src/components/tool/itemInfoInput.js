import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

import RANK from '../../constants/data/ranks';
import ITEM_TYPE from '../../constants/data/itemtypes';
import RACE from '../../constants/data/races';

import makeSelectOption from '../../utils/makeSelectOption';

function ItemInfoInput(){

    const dispatch = useDispatch();

    const textLeftAlign = {
        textAlign: "left",
    };

    const optionRank = makeSelectOption(RANK, false);
    const optionItemType = makeSelectOption(ITEM_TYPE, false);
    const optionRace = makeSelectOption(RACE, false);

    const changeItemInfo = (newItemInfo, index) => {
        dispatch({ type: 'CHANGE_ITEMINFO', index, newItemInfo});
    }; 

    return(
        <div>
            <div className="row">
                <div className="col text-start mt-5 mb-1">
                    <h3>아이템 정보</h3>
                </div>
            </div>

            {/* Rank */}
            <div className="row bg-white pt-4">
                <div className="col-md-1"></div>
                <div className="col-md-10" style={textLeftAlign}>
                    <Select placeholder="랭크" options={optionRank} onChange={(e) => changeItemInfo(e.value, 0)}/>
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* ItemType */}
            <div className="row bg-white">
                <div className="col-md-1"></div>
                <div className="col-md-10" style={textLeftAlign}>
                    <Select placeholder="아이템 타입" options={optionItemType} onChange={(e) => changeItemInfo(e.value, 1)}/>
                </div>
                <div className="col-md-1"></div>

            </div>

            {/* Race */}
            <div className="row bg-white pb-4">
                <div className="col-md-1"></div>
                <div className="col-md-10" style={textLeftAlign}>
                    <Select placeholder="착용 가능 종족" options={optionRace} onChange={(e) => changeItemInfo(e.value, 2)}/>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default ItemInfoInput;