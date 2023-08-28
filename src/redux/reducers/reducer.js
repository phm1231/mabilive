const initialState = {
    itemInfo: ['', '', ''],
    options: ['', '', ''],
    levels: ['', '', ''],
    enchant: ''
};
  

const optionReducer = (state = initialState.options, action) => {
    switch (action.type) {
        case 'CHANGE_OPTION':
            return state.map((option, index) =>
                index === action.index ? action.newOption : option
            );
        case 'INITIALIZE_OPTION':
            return initialState.options;
            
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
        case 'INITIALIZE_LEVEL':
            return initialState.levels;
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

const enchantReducer = (state = initialState.enchant, action) => {

    switch(action.type){
        case 'CHANGE_ENCHANT':
            return action.newEnchant;
        case 'INITIALIZE_ENCHANT':
            return initialState.enchant;
        default:
            return state;
    }
};
  
export { optionReducer, levelReducer, itemInfoReducer, enchantReducer };