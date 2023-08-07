import React from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import { useState, useRef } from "react";

function Home(){
    const imgStyle={
        height: "50px",
        width: "50px"
    };

    const itemTypes = [
        { value: '듀얼건', label: '듀얼건' },
        { value: '중갑옷', label: '중갑옷' },
        { value: '랜스', label: '랜스' }
    ];

    const ranks =[
        {value: '1랭크', label: '1랭크' },
        {value: '2랭크', label: '2랭크' },
        {value: '3랭크', label: '3랭크' }
    ];

    const races = [
        {value: '공용', label: '공용' },
        {value: '인간', label: '인간' },
        {value: '엘프', label: '엘프' },
        {value: '자이언트', label: '자이언트' },
        {value: '인간&엘프', label: '인간&엘프' },
        {value: '인간&자이언트', label: '인간&자이언트' }
    ];

    const levels = [
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
    ]

    const textLeftAlign = {
        textAlign: "left",
    };

    const onPopup = () => {
        const url = 'preview '
        window.open(url, "_blank", "noopener, noreferrer");
    }
    
    const [modal, setModal] = useState(false);
    const outside = useRef();

    return(
        <div class='bg-light'>
            <div class='container bg-light w-50'>
                {/* title */}
                <div class="row">
                    <div class="col text-start mt-5 mb-1">
                        <h3>세공 도구 가격</h3>
                    </div>
                </div>

                {/* Price Input */}
                <div class="row bg-white pt-2">
                    <div class="col-md-4">
                        <img class="image-fluid" style={imgStyle} src="img/elaborate.png" alt="정교한 세공 도구"></img>
                        <div class="text-start d-inline-block">정교한 세공 도구</div>
                    </div>
                    <div class="col-md-4">
                        <img class="image-fluid" style={imgStyle} src="img/brilliant.png" alt="영롱한 세공 도구"></img>
                        <div class="text-start d-inline-block">영롱한 세공 도구</div>
                    </div>
                    <div class="col-md-4">
                        <img class="image-fluid" style={imgStyle} src="img/advanced.png" alt="고급 세공 도구"></img>
                        <div class="text-start d-inline-block">고급 세공 도구</div>
                    </div>
                </div>
                <div class="row bg-white">
                    <div class="col-md-3">
                        <input class="bg-light"/>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3">

                        <input class="bg-light"/>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
                        <input class="bg-light"/>
                    </div>
                </div>

                <div class="row bg-white">
                    <div class="col mt-2">
                        <img class="image-fluid" style={imgStyle} src="img/plus.png" alt="착한 세공 도구 PLUS"></img>
                        <div class="text-start d-inline-block">착한 세공 도구 PLUS</div>
                    </div>
                    <div class="col mt-2">
                        <img class="image-fluid" style={imgStyle} src="img/memorize.png" alt="기억의 세공 도구"></img>
                        <div class="text-start d-inline-block">기억의 세공 도구</div>
                    </div>
                    <div class="col mt-2">
                        <img class="image-fluid" style={imgStyle} src="img/commerce.png" alt="교역 세공 도구"></img>
                        <div class="text-start d-inline-block">교역 세공 도구</div>
                    </div>
                </div>
                <div class="row bg-white pb-4">
                    <div class="col">
                        <input class="bg-light"/>
                    </div>
                    <div class="col">
                        <input class="bg-light"/>
                    </div>
                    <div class="col">
                        <input class="bg-light"/>
                    </div>
                </div>

                {/* Option Input */}
                <div class="row">
                    <div class="col text-start mt-5 mb-1">
                        <h3>아이템 정보</h3>
                    </div>
                </div>

                {/* Rank */}
                <div class="row bg-white pt-4">
                    <div class="col-md-1"></div>
                    <div class="col-md-10" style={textLeftAlign}>
                        <Select placeholder="랭크" options={ranks} />
                    </div>
                    <div class="col-md-1"></div>
                </div>

                {/* ItemType */}
                <div class="row bg-white">
                    <div class="col-md-1"></div>
                    <div class="col-md-10" style={textLeftAlign}>
                        <Select placeholder="아이템 타입" options={itemTypes} />
                    </div>
                    <div class="col-md-1"></div>

                </div>

                {/* Race */}
                <div class="row bg-white pb-4">
                    <div class="col-md-1"></div>
                    <div class="col-md-10" style={textLeftAlign}>
                        <Select placeholder="착용 가능 종족" options={races} />
                    </div>
                    <div class="col-md-1"></div>
                </div>

                {/* title */}
                <div class="row">
                    <div class="col text-start mt-5 mb-1">
                        <h3>세공 옵션 입력</h3>
                    </div>
                </div>

                {/* Option 1 */}
                <div class="row bg-white pt-4">
                    <div class="col-md-9 pe-0" style={textLeftAlign}>
                        <Select placeholder="첫 번째 옵션" options={ranks} />
                    </div>
                    <div class="col-md-3">
                        <Select placeholder="레벨" options={levels} />
                    </div>
                </div>

                {/* Option 2 */}
                <div class="row bg-white">
                    <div class="col-md-9 pe-0" style={textLeftAlign}>
                        <Select placeholder="선택 안 함" options={ranks} />
                    </div>
                    <div class="col-md-3">
                        <Select placeholder="레벨" options={levels} />
                    </div>
                </div>

                {/* Option 3 */}
                <div class="row bg-white pb-4">
                    <div class="col-md-9 pe-0" style={textLeftAlign}>
                        <Select placeholder="선택 안 함" options={ranks} />
                    </div>
                    <div class="col-md-3">
                        <Select placeholder="레벨" options={levels} />
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary my-4" onClick={onPopup}>계산하기</button>
            <button onClick={()=> setModal(true)}>Modal Open</button>
            {
                modal &&
                <Modal isOpen={true}>
                    This is Modal content
                    <button onClick={()=> setModal(false)}>Modal Close</button>
                </Modal>
            }
        </div>
    )
}
/*
                    <div class="col m-auto">
                        <img class="image-fluid" style={imgStyle} src="img/elaborate.png" alt="정교한 세공 도구"></img>
                        <div class="text-start d-inline-block">정교한 세공 도구</div>
                    </div>
                    <div class="col m-auto">
                        <img class="image-fluid" style={imgStyle} src="img/brilliant.png" alt="영롱한 세공 도구"></img>
                        <div class="text-start d-inline-block">영롱한 세공 도구</div>
                    </div>
                    <div class="col m-auto">
                        <img class="image-fluid" style={imgStyle} src="img/advanced.png" alt="고급 세공 도구"></img>
                        <div class="text-start d-inline-block">고급 세공 도구</div>
                    </div>
*/
export default Home;