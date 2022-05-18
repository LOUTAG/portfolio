export default (state='fr', action)=>{
    switch(action.type){
        case 'LANGUAGE':
            return state = action.payload
        default:
            return state;
    };
};