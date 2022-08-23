
import { BUY_BIKE, BUY_TEN_BIKES, SALE_BIKE, SALE_TEN_BIKES } from "../action/actionType";
const initialState={
   TotalNumberofBikes:1000
}
const Bikereducers=((state=initialState,action)=>{
    switch(action.type){
        case BUY_BIKE:
            return{TotalNumberofBikes:state.TotalNumberofBikes-1};
        case SALE_BIKE:
            return{TotalNumberofBikes:state.TotalNumberofBikes+1};
        case BUY_TEN_BIKES:
            return{TotalNumberofBikes:state.TotalNumberofBikes-10};
        case SALE_TEN_BIKES:
            return{TotalNumberofBikes:state.TotalNumberofBikes+10};
        default:
            return state;
    }
})
export default Bikereducers;