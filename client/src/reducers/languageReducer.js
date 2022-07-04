const initialState = window.navigator.language ==='en' ? 'en' : 'fr';
export default (state=initialState, action)=>{
    switch(action.type){
        case 'LANGUAGE':
            return state = action.payload;
        default:
            return state;
    };
};