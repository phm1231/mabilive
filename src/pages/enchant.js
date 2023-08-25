import React from 'react';
import EnchantInfoInput from '../components/enchant/enchantInfoInput';
import Modal from '../components/enchant/modal';

function Enchant(){
    return(
        <div className='bg-light'>
            <div className='container bg-light w-50'>
                <EnchantInfoInput></EnchantInfoInput>
                <Modal></Modal>
            </div>
        </div>
    )
}

export default Enchant;