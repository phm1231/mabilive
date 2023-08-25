import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {magicPowderImgs} from '../../constants/data/imgs';
import magicPowderNames from '../../constants/data/magicpowder_names';
import getEnchantProbability from '../../utils/getEnchantProbability';
import getExpectedCount from '../../utils/getExpectedCount';

function Result(props){
    const enchant = useSelector(state => state.enchant);
    const [oneTimeProb, setOneTimeProb] = useState(false);
    const [oneTimeProbInThu, setOneTimeProbThu] = useState(false); // 목요일

    const KforExpectedCount = 1 - 0.63;

    const colors = ["#256498", "#81A7CB", "#99BE90", "#FBCB05", "#A056E9"];
    const imgStyle={
        height: "45px",
        width: "50px"
    };

    useEffect(()=>{
        const isNotThursday = '0';
        const isThursday = '1';
        const newOneTimeProb = getEnchantProbability(magicPowderNames[props.index], isNotThursday, enchant);
        const newOneTimeProbThu = getEnchantProbability(magicPowderNames[props.index], isThursday, enchant);
        setOneTimeProb(newOneTimeProb);
        setOneTimeProbThu(newOneTimeProbThu)

    }, [enchant, props]);

    return(
        <div className="row">
            <div className="col ms-0">
                <div className="d-flex align-items-center">
                    <img className="image-fluid" style={imgStyle} src={magicPowderImgs[props.index]} alt={magicPowderNames[props.index]}></img>
                    <div className="text-start d-inline-block fs-4 fw-bold">
                        <font color={colors[props.index]}>{magicPowderNames[props.index]}</font>
                    </div>
                </div>
            </div>

            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">1회 시행 시 성공 확률</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">{"평일: " + (Math.floor(oneTimeProb * 100)) + "%"}</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">{"목요일: " + (Math.floor(oneTimeProbInThu * 100)) + "%"}</div>
            </div>
            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">예상 시도 횟수</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">{"평일: " + Math.max(getExpectedCount(oneTimeProb, KforExpectedCount), 1)}</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">{"목요일: " + Math.max(getExpectedCount(oneTimeProbInThu, KforExpectedCount), 1)}</div>
            </div>
        </div>
    );
}
export default Result;