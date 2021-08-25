import { useEffect, useRef } from "react";
import { 
    Flex,
    IconButton 
} from '@chakra-ui/react';
import { FaPlay, FaRedoAlt, FaPause } from "react-icons/fa";

import { useTimer } from "../../hooks/useTimer";
import { useStateValue } from "../../contexts/stateProvider";
import { actionTypes } from "../../reducer/reducer";

const TimerControls = () => {

    const[{ projectName, timerValue, breakValue, sessionValue, isBusy, timerLabel}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const timeredValue = useTimer();
    const notificationUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3';
    const notificationRef = useRef();

    const handleReset = () => {
        dispatch({
            ...state,
            type: actionTypes.RESET_TIMER
        });
        notificationRef.current.pause();
        notificationRef.current.time = 0;
    };

    const handleTimeCounting = () => {
        dispatch({
            ...state,
            type: actionTypes.START_TIMER,
            timerValue: timerValue - 1
        }); 
        if(timerValue === 0) notificationRef.current.play();
        if(timerValue < 0) {
            if(timerLabel === 'Session') {
                dispatch({
                    ...state,
                    type: actionTypes.TOGGLE_TIMER_LABEL,
                    timerLabel: 'Break Time'
                });
                dispatch({
                    ...state,
                    type: actionTypes.START_TIMER,
                    timerValue: (breakValue * 60) - 1
                });
            } else {
                dispatch({
                    ...state,
                    type: actionTypes.TOGGLE_TIMER_LABEL,
                    timerLabel: 'Session'
                });
                dispatch({
                    ...state,
                    type: actionTypes.START_TIMER,
                    timerValue: (sessionValue * 60) - 1
                });
            }
        }
    };

    const handlePauseAndPlay = () => {
        dispatch({
            ...state,
            type: actionTypes.TOGGLE_BUSY,
            isBusy: !state.isBusy
        });
    };

    useEffect(() => {
        if(isBusy) {
            let timerInterval = setInterval(() => {
                handleTimeCounting();
                document.title = `[${timerLabel} | ${timeredValue}]`
            }, 1000);
            return () => clearInterval(timerInterval);
        } else {
            document.title = projectName;
        }
    });

    return (
        <Flex flexDirection="row" justifyContent="space-evenly" alignContent="center" pt="10px">
            <IconButton 
                size="lg" 
                isRound 
                onClick={handlePauseAndPlay} 
                icon={!isBusy ? <FaPlay /> : <FaPause />}
            />
            <IconButton 
                size="lg" 
                isRound 
                onClick={handleReset} 
                icon={<FaRedoAlt />}
            />
            <audio src={notificationUrl} ref={notificationRef} preload="auto" />
        </Flex>
    );

}

export default TimerControls;
