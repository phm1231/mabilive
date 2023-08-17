const {advanced, elaborate, commerce}= require('../constants/data/probability');

function normalization(str){
    return str.normalize("NFC");
}

function mergeTable(rank, advanced_itemtype, elaborate_itemtype, race, bUseAdvancedTable, bUseCommerceTable){
    const mergedOptionTable = {};
    // 정세공
    if(elaborate.hasOwnProperty(rank) && elaborate[rank].hasOwnProperty(elaborate_itemtype) && elaborate[rank][elaborate_itemtype].hasOwnProperty(race)){
        for(let [key, value] of Object.entries(elaborate[rank][elaborate_itemtype][race])){
            // [rank][itemtype][race] = 옵션이름: {"0" : 옵션 등장 확률, "레벨" : 레벨 등장 확률}
            mergedOptionTable[key] = {};
            const minLevel = Number(Object.keys(value)[1]); // [0]은 등장 확률
            const maxLevel = Number(Object.keys(value)[Object.keys(value).length - 1]);

            // key가 존재한다면
            if(mergedOptionTable.hasOwnProperty(key)){
                // 등장 확률이 존재한다면
                if(mergedOptionTable[key].hasOwnProperty("0")){
                    const tmp = Number(mergedOptionTable[key]["0"]);
                    mergedOptionTable[key]["0"] = tmp < minLevel ? tmp : minLevel;
                }
                else{
                    mergedOptionTable[key]["0"] = minLevel;
                }
                if(mergedOptionTable[key].hasOwnProperty("1")){
                    const tmp = Number(mergedOptionTable[key]["1"]);
                    mergedOptionTable[key]["1"] = tmp > maxLevel ? tmp : maxLevel;
                }
                else{
                    mergedOptionTable[key]["1"] = maxLevel;
                }
            }
        }
    }

    // 고세공
    if(bUseAdvancedTable && advanced.hasOwnProperty(rank) && advanced[rank].hasOwnProperty(advanced_itemtype) && advanced[rank][advanced_itemtype].hasOwnProperty(race)){
        for( let [key, value] of Object.entries(advanced[rank][advanced_itemtype][race])){
            const minLevel = Number(Object.keys(value)[1]); // [0]은 등장 확률
            const maxLevel = Number(Object.keys(value)[Object.keys(value).length - 1]);

            if(mergedOptionTable.hasOwnProperty(key)){
                if(mergedOptionTable[key].hasOwnProperty("0")){
                    const tmp = Number(mergedOptionTable[key]["0"]);
                    mergedOptionTable[key]["0"] = tmp < minLevel ? tmp : minLevel;
                }
                else{
                    mergedOptionTable[key]["0"] = minLevel;
                }
                if(mergedOptionTable[key].hasOwnProperty("1")){
                    const tmp = Number(mergedOptionTable[key]["1"]);
                    mergedOptionTable[key]["1"] = tmp > maxLevel ? tmp : maxLevel;
                }
                else{
                    mergedOptionTable[key]["1"] = maxLevel;
                }
            }
        }
    }

    // 교세공
    const commerce_item = advanced_itemtype;
    if(bUseCommerceTable && commerce.hasOwnProperty(rank) && commerce[rank].hasOwnProperty(commerce_item) && commerce[rank][commerce_item].hasOwnProperty(race)){
        for( let [key, value] of Object.entries(commerce[rank][commerce_item][race])){
            const minLevel = Number(Object.keys(value)[1]); // [0]은 등장 확률
            const maxLevel = Number(Object.keys(value)[Object.keys(value).length - 1]);

            if(mergedOptionTable.hasOwnProperty(key)){
                if(mergedOptionTable[key].hasOwnProperty("0")){
                    const tmp = Number(mergedOptionTable[key]["0"]);
                    mergedOptionTable[key]["0"] = tmp < minLevel ? tmp : minLevel;
                }
                else{
                    mergedOptionTable[key]["0"] = minLevel;
                }
                if(mergedOptionTable[key].hasOwnProperty("1")){
                    const tmp = Number(mergedOptionTable[key]["1"]);
                    mergedOptionTable[key]["1"] = tmp > maxLevel ? tmp : maxLevel;
                }
                else{
                    mergedOptionTable[key]["1"] = maxLevel;
                }
            }
        }
    }
    return mergedOptionTable;
}


function createTable(itemInfo){

    let bUseAdvancedTable = true;
    let bUseCommerceTable = false;

    const rank = normalization(itemInfo[0]) || 0;
    let itemType = normalization(itemInfo[1]) || 0;
    const race = normalization(itemInfo[2]) || 0;
    
    if(rank === 0 || rank === '' || itemType === 0 || itemType === '' || race === 0 || race === '') return false;

    // 정교한 세공 도구에 존재하지 않는 아이템 타입에 대하여 아이템 타입 매치
    const classic_str = normalization('클래식 정령 ');
    const fullswing_str = normalization('자이언트 풀 스윙 ');
    const axe_str = normalization('양손 도끼');
    const blunt_str = normalization('양손 둔기');

    let elaborate_itemtype = itemType;

    if(elaborate_itemtype.includes(classic_str)){
        elaborate_itemtype = elaborate_itemtype.replace(classic_str, '');
    }
    if(elaborate_itemtype.includes(fullswing_str)){
        if(itemType.includes(axe_str)) elaborate_itemtype = axe_str;
        else if(itemType.includes(blunt_str)) elaborate_itemtype = blunt_str;
    }

    // 고급 세공 도구에서 통합하기 어려운 예외 아이템 타입에 대해서 처리
    let exception_types = [normalization("레이피어"), normalization("셰프의 거친 손길"),
        normalization("마력 너클"), normalization("대형 낫"), normalization("썬로드 콜트"),
        normalization("양손 도끼"), normalization("양손 둔기")];
    if(exception_types.includes(itemType)){
        bUseAdvancedTable = false;
    }

    // 교역 세공 도구 포함 여부 처리
    let commerce_types = [normalization("천옷(교역 강화 의상)"), normalization("천옷"),
    normalization("중갑옷"), normalization("경갑옷")];
    if(commerce_types.includes(itemType)){
        bUseCommerceTable = true;
    }

    return mergeTable(rank, itemType, elaborate_itemtype, race, bUseAdvancedTable, bUseCommerceTable);
}

export default createTable;