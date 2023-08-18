import React from 'react';

function toolPriceInput(){

    const imgStyle={
        height: "50px",
        width: "50px"
    };

    return(
        <div>
            {/* title */}
            <div className="row">
                <div className="col text-start mt-5 mb-1">
                    <h3>세공 도구 가격</h3>
                </div>
            </div>

            {/* Price Input */}
            <div className="row bg-white pt-2">
                <div className="col-md-4">
                    <img className="image-fluid" style={imgStyle} src="img/elaborate.png" alt="정교한 세공 도구"></img>
                    <div className="text-start d-inline-block">정교한 세공 도구</div>
                </div>
                <div className="col-md-4">
                    <img className="image-fluid" style={imgStyle} src="img/brilliant.png" alt="영롱한 세공 도구"></img>
                    <div className="text-start d-inline-block">영롱한 세공 도구</div>
                </div>
                <div className="col-md-4">
                    <img className="image-fluid" style={imgStyle} src="img/advanced.png" alt="고급 세공 도구"></img>
                    <div className="text-start d-inline-block">고급 세공 도구</div>
                </div>
            </div>
            <div className="row bg-white">
                <div className="col-md-3">
                    <input className="bg-light"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">

                    <input className="bg-light"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <input className="bg-light"/>
                </div>
            </div>

            <div className="row bg-white">
                <div className="col mt-2">
                    <img className="image-fluid" style={imgStyle} src="img/plus.png" alt="착한 세공 도구 PLUS"></img>
                    <div className="text-start d-inline-block">착한 세공 도구 PLUS</div>
                </div>
                <div className="col mt-2">
                    <img className="image-fluid" style={imgStyle} src="img/memorize.png" alt="기억의 세공 도구"></img>
                    <div className="text-start d-inline-block">기억의 세공 도구</div>
                </div>
                <div className="col mt-2">
                    <img className="image-fluid" style={imgStyle} src="img/commerce.png" alt="교역 세공 도구"></img>
                    <div className="text-start d-inline-block">교역 세공 도구</div>
                </div>
            </div>
            <div className="row bg-white pb-4">
                <div className="col-md-3">
                    <input className="bg-light"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <input className="bg-light"/>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <input className="bg-light"/>
                </div>
            </div>
        </div>
    )
}

export default toolPriceInput;