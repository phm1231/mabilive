import React from 'react';

function toolPriceInput(){

    const imgStyle={
        height: "50px",
        width: "50px"
    };

    return(
        <div>
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
        </div>
    )
}

export default toolPriceInput;