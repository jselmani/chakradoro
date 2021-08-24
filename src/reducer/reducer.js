export const initialState = {
    projectName: 'Chakradoro Timer',
    githubUsername: 'jselmani',
    githubUrl: 'https://github.com/jselmani',
    timerLabel: 'Session',
    isBusy: 'false',
    breakValue: 5,
    sessionValue: 25,
    timerValue: 1500 // 25 * 60 to give value in seconds
};

export const actionTypes = {
    START_TIMER: 'START_TIMER',
    RESET_TIMER: 'RESET_TIMER',
    TOGGLE_TIMER_LABEL: 'TOGGLE_TIMER_LABEL',
    TOGGLE_BUSY: 'TOGGLE_BUSY',
    INCREASE_BREAK_VALUE: 'INCREASE_BREAK_VALUE',
    DECREASE_BREAK_VALUE: 'DECREMENT_BREAK_VALUE',
    INCREASE_SESSION_VALUE: 'INCREASE_SESSION_VALUE',
    DECREASE_SESSION_VALUE: 'DECREASE_SESSION_VALUE',
    SET_PROJECT_NAME: 'SET_PROJECT_NAME'
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.START_TIMER:
            return {
                ...state,
                timerValue: action.timerValue
            };
        case actionTypes.RESET_TIMER:
            return initialState;
        case actionTypes.TOGGLE_TIMER_LABEL:
            return {
                ...state,
                timerLabel: actionTypes.timerLabel
            };
        case actionTypes.TOGGLE_BUSY:
            return {
                ...state,
                isBusy: action.isBusy
            };
        case actionTypes.INCREASE_BREAK_VALUE:
        case actionTypes.DECREASE_BREAK_VALUE:
            return {
                ...state,
                breakValue: action.breakValue
            };
        case actionTypes.INCREASE_SESSION_VALUE:
        case actionTypes.DECREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: action.sessionValue
            };
        case actionTypes.SET_PROJECT_NAME:
            return {
                ...state,
                projectName: action.projectName,
                timerLabel: action.timerLabel
            };
        default:
            return state;
    }
};

export default reducer;
