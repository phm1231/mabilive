import React from 'react';
import { useSelector } from 'react-redux';
import {magicPowderImgs} from '../../constants/data/imgs';


function ModalInput(){
    const enchant = useSelector(state => state.enchant);
    const imgIndex = 5;

    const imgStyle={
      height: "45px",
      width: "50px"
    };

    return(
    <div className="row">
        <div className="col ms-0">
            <div className="d-flex align-items-center">
                <img className="image-fluid" style={imgStyle} src={magicPowderImgs[imgIndex]} alt={"thumbnail"}></img>
                <div className="text-start d-inline-block fs-4 fw-bold ">
                    <font className="ps-1" color="#333333">{"입력한 인챈트 랭크: " + enchant}</font>
                </div>
            </div>
        </div>

        <div className="row mx-auto pt-2">
            <div className="text-start fs-6">캐릭터 스킬 1랭크, 지력200 이상 기준입니다.</div>
        </div>

        <div className="row mx-auto pt-2">
            <div className="text-start fst-normal">PC방 확률은 결과에 10%를 더해주세요.</div>
        </div>
    </div>
  );
}

export default ModalInput;