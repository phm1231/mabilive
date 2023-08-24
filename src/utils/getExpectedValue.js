import { elaborate, brilliant, advanced, commerce, kindplus, memorize, credne } from "../constants/data/probability";

function getExpectedValue(index, itemInfo, options, levels){
    const tables = [elaborate, brilliant, advanced, kindplus, memorize, commerce, credne];
    // table에 itemInfo가 존재하는지.
    if(!checkIsValid(tables[index], itemInfo, options, levels)) return false;
    
    return getProbability(tables[index][itemInfo[0]][itemInfo[1]][itemInfo[2]], options, levels);
}

export default getExpectedValue;

function checkIsValid(table, itemInfo, options, levels){
    // table에 itemInfo가 존재함.
    if(table.hasOwnProperty(itemInfo[0]) && table[itemInfo[0]].hasOwnProperty(itemInfo[1]) && table[itemInfo[0]][itemInfo[1]].hasOwnProperty(itemInfo[2])){

        const t = table[itemInfo[0]][itemInfo[1]][itemInfo[2]];
        for(let i=0; i<3; i++){
            if(options[i] === '') continue;
            if(!t.hasOwnProperty(options[i])) return false;
            if(!t[options[i]].hasOwnProperty(levels[i])) return false;
        }
        return true;
    }
    return false;
}

function getProb(probTable, level){
    // 옵션 등장 확률
    const appearanceProb = Number(probTable["0"].replace("%", ""));

    // 레벨 별 등장 확률
    let sumofLevelProb = getSumofLevelProb(probTable, level);

    return [appearanceProb, sumofLevelProb];    
}

function getSumofLevelProb(probTable, level){
    const keys = Object.keys(probTable);

    let idx = keys.indexOf(level.toString());
    // 테이블에서 레벨을 찾을 수 없는 경우
    if(idx === -1){
        // 입력한 레벨이 너무 작은 경우
        if(level < Number(keys[1])) idx = 1;
        // 입력한 레벨이 너무 큰 경우
        else if(level > Number(keys[keys.length - 1])) return false;
    }

    let sumofLevelProb = 0.0;
    for(; idx < keys.length; idx++){
        sumofLevelProb += Number(probTable[keys[idx]].replace("%", ""));
    }

    return sumofLevelProb;
}
  
function getFinalProb(option_probs, level_probs){
    const weight = option_probs.length > 1 ? 6 : 3;
    const KEEP = 1000000000000; // 1조

    let sumofOptionProbs = 0;
    for(let i=0; i<option_probs.length; i++){
        sumofOptionProbs += option_probs[i];
    }

    // 길이 맞춰주는 과정
    for(let i=option_probs.length; i<3; i++){
        option_probs.push(100-sumofOptionProbs);
        level_probs.push(100);
    }
  
    let result = option_probs[0] * level_probs[0];
    for(let i=1; i<3; i++){
        let tmp = option_probs[i] * level_probs[i];
        result = Math.floor(result * tmp * KEEP) / KEEP;
    }
    
    result *= weight;
    result = result / (Math.pow(10000, option_probs.length));

    return result;
}
  
  
function getProbability(table, options, levels){
    const option_probs = [];
    const level_probs = [];

    // 옵션 별 등장 확률
    for(let i=0; i<3; i++){
        if(options[i] === '' && levels[i] === '') continue;

        const [prob, level] = getProb(table[options[i]], levels[i]);
        // 등장하지 않는 옵션이 포함되어 있을 경우
        if(prob === false) return false;

        option_probs.push(prob);
        level_probs.push(level);
    }

    // 옵션이 함께 등장할 확률 구하기
    return getFinalProb(option_probs, level_probs);
}

// 이하는 저장 창고

function getAverageExpectedCount(prob){
    return Math.floor(1 / prob);
}
  
function getMaximumExpectedCount(prob){
    const logValue = Math.log(1 - prob);
    const under_point = prob.toFixed(20).split('.')[1];
    let minValue = "0.";
  
    for(let item of under_point){
      if(item !== "0"){
        minValue += "04";
        break;
      }
      minValue += item;
    }
    const maximumExpectedCount = Math.log(parseFloat(minValue)) / logValue;
    return Math.floor(maximumExpectedCount);
}