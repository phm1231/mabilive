import React, {useState} from 'react';
import Modal from '../components/modal';
import ItemInfoInput from '../components/tool/itemInfoInput';
import OptionInfoInput from '../components/tool/optionInfoInput';

// import ToolPriceInput from '../components/tool/toolPriceInput';
// import Counter from '../components/counter';

function Home(){
    // <Counter>
    // <ToolPriceInput>
    const [isItemInputed, setIsItemInputed] = useState(false);

    const updateItemInput = (value) => {
        setIsItemInputed(value);
    };

    return(
        <div class='bg-light'>
            <div class='container bg-light w-50'>
                <ItemInfoInput updateItemInput={updateItemInput}></ItemInfoInput>
                <OptionInfoInput isDisabled={!isItemInputed}></OptionInfoInput>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default Home;