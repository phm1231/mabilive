import React from 'react';
import Modal from '../components/tool/modal';
import ItemInfoInput from '../components/tool/itemInfoInput';
import OptionInfoInput from '../components/tool/optionInfoInput';


function Home(){
    return(
        <div className='bg-light'>
            <div className='container bg-light w-50'>
                <ItemInfoInput></ItemInfoInput>
                <OptionInfoInput></OptionInfoInput>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default Home;