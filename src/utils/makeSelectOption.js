function makeSelectOption(items, includeEmptyValue){
    const ret = [];
    
    if(includeEmptyValue) ret.push({value: '', label: '선택 안 함'});

    for (let item of items) {
        if(typeof(item) === "string") item = item.normalize("NFC");
        ret.push({value: item, label: item});
    }
    return ret;
}

export default makeSelectOption;