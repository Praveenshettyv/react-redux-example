import { BUY_BIKE, BUY_TEN_BIKES, SALE_BIKE, SALE_TEN_BIKES,} from "./actionType";
function buybike(){
    return{
        type:BUY_BIKE
    }
}
function salebike(){
    return{
        type:SALE_BIKE
    }
}
function buytenbikes(){
    return{
        type:BUY_TEN_BIKES
    }
}
 function actionfunction(){
    return{
        type:SALE_TEN_BIKES
    }
}
export {buybike,actionfunction,buytenbikes,salebike};