export default (countReducer = {}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return countReducer + 1;
        case "DECREMENT":
            return countReducer - 1;
        default:
            return countReducer;
    }
}
