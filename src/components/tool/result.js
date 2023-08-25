import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import getExpectedValue from '../../utils/getExpectedValue';
import getExpectedCount from '../../utils/getExpectedCount';
import getRoundDigit from '../../utils/getRoundDigit';
import addCommas from '../../utils/addCommas';
import toolnames from '../../constants/data/toolnames';
import {toolImgs} from '../../constants/data/imgs';

function Result(props){
    const options = useSelector(state => state.options);
    const levels = useSelector(state => state.levels);
    const itemInfo = useSelector(state => state.itemInfo);

    const [oneTimeProb, setOneTimeProb] = useState(false);
    
    const colors = ["#256498", "#BA8F5E", "#F3C645", "#CD4141", "#F4DF4A", "#3E75B4", "#000000"]; // 정교 영롱 고급 착세플 기억 교역 크레드네
    const imgStyle={
        height: "45px",
        width: "50px"
    };

    useEffect(()=>{
        const newOneTimeProb = getExpectedValue(props.index, itemInfo, options, levels);
        setOneTimeProb(newOneTimeProb);
    }, [itemInfo, options, levels, props]);

    if(oneTimeProb !== false){
        const outputProb = oneTimeProb * 100;
        const ROUND_DIGIT = (getRoundDigit(outputProb) + 4) % 20;
        const p10 = getExpectedCount(oneTimeProb, 1-0.1);
        const p63 = getExpectedCount(oneTimeProb, 1-0.63);
        const p90 = getExpectedCount(oneTimeProb, 1-0.9);

        return(
            <div className="row">
                <div className="col ms-0">
                    <div className="d-flex align-items-center">
                        <img className="image-fluid" style={imgStyle} src={toolImgs[props.index]} alt={toolnames[props.index]}></img>
                        <div className="text-start d-inline-block fs-4 fw-bold">
                            <font color={colors[props.index]}>{toolnames[props.index]}</font>
                        </div>
                    </div>
                </div>

                <div className="row ms-0">
                    <div className="text-start fs-5 fw-bold">1회 시행 시 옵션 등장 확률</div>
                </div>
                <div className="row ms-auto">
                    <div className="text-start fst-normal">{outputProb.toFixed(ROUND_DIGIT) + "%"}</div>
                </div>
                <div className="row ms-0">
                    <div className="text-start fs-5 fw-bold">상위 10%</div>
                </div>
                <div className="row ms-auto">
                    <div className="text-start fst-normal">{isFinite(p10) ? addCommas(p10.toString()) + "개": "계산 불가"}</div>
                </div>
                <div className="row ms-0">
                    <div className="text-start fs-5 fw-bold">평균 (상위 63%)</div>
                </div>
                <div className="row ms-auto">
                    <div className="text-start fst-normal">{isFinite(p63) ? addCommas(p63.toString()) + "개": "계산 불가"}</div>
                </div>
                <div className="row ms-0">
                    <div className="text-start fs-5 fw-bold">상위 90%</div>
                </div>
                <div className="row ms-auto">
                    <div className="text-start fst-normal">{isFinite(p90) ? addCommas(p90.toString()) + "개": "계산 불가"}</div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="row">
                <div className="col ms-0">
                    <div className="d-flex align-items-center">
                        <img className="image-fluid" style={imgStyle} src={toolImgs[props.index]} alt={toolnames[props.index]}></img>
                        <div className="text-start d-inline-block fs-4 fw-bold">
                            <font color={colors[props.index]}>{toolnames[props.index]}</font>
                        </div>
                    </div>
                </div>

                <div className="row ms-0">
                    <div className="text-start fs-5 fw-bold">1회 시행 시 옵션 등장 확률</div>
                </div>
                <div className="row ms-auto">
                    <div className="text-start fst-normal">등장할 수 없는 옵션 혹은 레벨입니다.</div>
                </div>
            </div>
        );        
    }
}

export default Result;