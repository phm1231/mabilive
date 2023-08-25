import {enchant} from '../constants/data/probability';

function getEnchantProbability(name, day, rank){
    if(enchant.hasOwnProperty(name) && enchant[name].hasOwnProperty(day) && enchant[name][day].hasOwnProperty(rank)){
        return Number(enchant[name][day][rank].replace("%", "")) / 100;
    }
    return false;
}

export default getEnchantProbability;