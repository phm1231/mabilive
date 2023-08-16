const initialState = {
    itemInfo: ['', '', ''],
    options: ['', '', ''],
    levels: ['', '', '']
};
  

const optionReducer = (state = initialState.options, action) => {
    switch (action.type) {
        case 'CHANGE_OPTION':
            return state.map((option, index) =>
                index === action.index ? action.newOption : option
            );
        default:
            return state;
    }
};

const levelReducer = (state = initialState.levels, action) => {
    switch (action.type) {
        case 'CHANGE_LEVEL':
            return state.map((level, index) =>
                index === action.index ? action.newLevel : level
            );
        default:
            return state;
    }
};

const itemInfoReducer = (state = initialState.itemInfo, action) => {
    switch (action.type) {
        case 'CHANGE_ITEMINFO':
            return state.map((itemInfo, index) =>
                index === action.index ? action.newItemInfo : itemInfo
            );
        default:
            return state;
    }
};
  
export { optionReducer, levelReducer, itemInfoReducer };