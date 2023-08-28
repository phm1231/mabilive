import React, {useEffect} from 'react';
import EnchantInfoInput from '../components/enchant/enchantInfoInput';
import Modal from '../components/enchant/modal';

import { useDispatch } from 'react-redux';

function Enchant(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: 'INITIALIZE_ENCHANT'});
    }, []);

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