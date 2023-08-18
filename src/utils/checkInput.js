function checkInput(options, levels){
    // 중복된 옵션 확인
    for(let i=0; i<3; i++){
        if(options[i] === '') continue;
        for(let j=i+1; j<3; j++){
            if(options[i] === options[j]) return false;
        }
    }

    // 옵션 - 레벨 확인
    let cnt = 0; // 올바른 옵션 갯수
    for(let i=0; i<3; i++){
        // 옵션은 있는데 레벨이 없음
        if(options[i] !== '' && levels[i] === '') return false;
        // 적어도 정상적으로 선택된 개수
        if(options[i] !== '' && levels[i] !== '') cnt++;
    }

    // 올바르게 입력된 옵션이 단 1개도 없는 경우.
    if(cnt === 0) return false;
    return true;
}

export default checkInput;
