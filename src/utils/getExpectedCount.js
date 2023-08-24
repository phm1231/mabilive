// (1-p)^n = k 
// n = log k - log(1-p)
// p = prob
// n = 기대 횟수
// k = 상위 %
function getExpectedCount(p, k){
    return parseInt(Math.log(k) / Math.log(1-p));
}

export default getExpectedCount;