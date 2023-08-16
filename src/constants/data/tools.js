import ELABORATE_IMG from "../img/ELABORATE.png"; // 정교한
import BRILLIANT_IMG from "../img/BRILLIANT.png"; // 영롱한
import ADVANCED_IMG from "../img/ADVANCED.png"; // 고급
import CREDNE_IMG from "../img/CREDNE.png"; // 크레드네
import KINDPLUS_IMG from "../img/KINDPLUS.png"; // 착세플
import MEMORIZE_IMG from "../img/MEMORIZE.png"; // 기세공
import COMMERCE_IMG from "../img/COMMERCE.png"; // 기세공

export const Tools = {
    ELABORATE: "정교한 세공 도구", // 정교한
    BRILLIANT: "영롱한 세공 도구", // 영롱한
    ADVANCED: "고급 세공 도구", // 고급스러운
    CREDNE: "크레드네의 세공 도구", // 크레드네
    KINDPLUS: "착한 세공 도구 PLUS", // 착세플
    MEMORIZE: "기억의 세공 도구", // 기억
    COMMERCE: "교역 세공 도구", // 교역
};

export const ToolnamesForAPI = ["elaborate", "brilliant", "advanced", "credne", "kindplus", "memorize", "commerce"];
export const Toolnames = ["정교한 세공 도구", "영롱한 세공 도구", "고급 세공 도구", "크레드네의 세공 도구", "착한 세공 도구 PLUS", "기억의 세공 도구", "교역 세공 도구"];

export function getToolImg(name){
    switch(name.normalize("NFD")){
        case "정교한 세공 도구".normalize("NFD"):
            return ELABORATE_IMG;
        case "영롱한 세공 도구".normalize("NFD"):
            return BRILLIANT_IMG;
        case "고급 세공 도구".normalize("NFD"):
            return ADVANCED_IMG;
        case "크레드네의 세공 도구".normalize("NFD"):
            return CREDNE_IMG;
        case "착한 세공 도구 PLUS".normalize("NFD"):
            return KINDPLUS_IMG;
        case "기억의 세공 도구".normalize("NFD"):
            return MEMORIZE_IMG;
        case "교역 세공 도구".normalize("NFD"):
            return COMMERCE_IMG;
        default:
            break;
    }
}

export function getPrice(name){
    switch(name.normalize("NFD")){
        case "정교한 세공 도구".normalize("NFD"):
            return 1500000;
        case "영롱한 세공 도구".normalize("NFD"):
            return 2000000;
        case "고급 세공 도구".normalize("NFD"):
            return 1000000;
        case "크레드네의 세공 도구".normalize("NFD"):
            return 3000000;
        case "착한 세공 도구 PLUS".normalize("NFD"):
            return 2000000;
        case "기억의 세공 도구".normalize("NFD"):
            return 1000000;
        case "교역 세공 도구".normalize("NFD"):
            return 1000000;
        default:
            break;
    }
}