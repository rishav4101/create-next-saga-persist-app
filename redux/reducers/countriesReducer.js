const initialState = {
    countries: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "COUNTRIES_FETCHED":
            console.log(action)
            return {...state, countries:action.payload};
        default:
            return state;
    }
}