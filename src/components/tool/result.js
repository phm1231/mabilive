import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import getExpectedValue from '../../utils/getExpectedValue';

function Result(props){
    const options = useSelector(state => state.options);
    const levels = useSelector(state => state.levels);
    const itemInfo = useSelector(state => state.itemInfo);

    const [oneTimeProb, setOneTimeProb] = useState(false);

    const toolnames = [ "정교한 세공 도구", "영롱한 세공 도구", "고급 세공 도구", "착한 세공 도구 PLUS", "기억의 세공 도구", "교역 세공 도구" ];
    const imgSrc = ["img/elaborate.png", "img/brilliant.png", "img/advanced.png", "img/plus.png", "img/memorize.png", "img/commerce.png"]
    const imgStyle={
        height: "45px",
        width: "50px"
    };

    const textLeftAlign = {
        textAlign: "left",
    };

    useEffect(()=>{
        const newOneTimeProb = getExpectedValue(props.index, itemInfo, options, levels);
        setOneTimeProb(newOneTimeProb);
    }, [itemInfo, options, levels]);

    return(
        <div className="row">
            <div className="col ms-0">
                <div className="d-flex align-items-center">
                    <img className="image-fluid" style={imgStyle} src={imgSrc[props.index]} alt={toolnames[props.index]}></img>
                    <div className="text-start d-inline-block text-primary fs-4 fw-bold">{toolnames[props.index]}</div>
                </div>
            </div>

            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">1회 시행 당 확률</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">{oneTimeProb}</div>
            </div>
            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">상위 10%</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">몇 개</div>
            </div>
            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">평균 (상위 63%)</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">몇 개</div>
            </div>
            <div className="row ms-0">
                <div className="text-start fs-5 fw-bold">상위 90%</div>
            </div>
            <div className="row ms-auto">
                <div className="text-start fst-normal">몇 개</div>
            </div>
        </div>
        
    );
}
/*
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              {options[index]}
              {levels[index]}
              {itemInfo[index]}
            </li>
          ))}
        </ul>
*/
export default Result;