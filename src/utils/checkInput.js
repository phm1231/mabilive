function checkInput(options, levels){

    for(let i=0; i<3; i++){
        if(options[i] === ''){
            if(levels[i] !== '') return false;
        }
        else{
            if(levels[i] === '') return false;
        }
    }

    return ret;
}

export default makeSelectOption;