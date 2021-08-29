import { Fragment } from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { useStateValue } from '../../contexts/stateProvider';
import { actionTypes } from '../../reducer/reducer';

const SessionControls = ({ iconColor }) => {
    const [{ sessionValue, isBusy }] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleIncrease = () => {
        dispatch({
            ...state,
            type: actionTypes.INCREASE_SESSION_VALUE,
            sessionValue: sessionValue + 1,
            timerValue: (sessionValue + 1) * 60
        });
    };

    const handleDecrease = () => {
        dispatch({
            ...state,
            type: actionTypes.DECREASE_SESSION_VALUE,
            sessionValue: sessionValue - 1,
            timerValue: (sessionValue - 1) * 60
        });
    };

    return (
        <Fragment>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="baseline">
                <IconButton 
                    size="md"
                    isRound
                    onClick={handleDecrease}
                    isDisabled={isBusy || sessionValue <= 1}
                    icon={<FaMinus />}
                    color={iconColor}
                    _hover={{
                        transform: "scale(1.1)"
                    }}
                />
                <Text fontSize="lg">{ sessionValue }</Text>
                <IconButton 
                    size="md"
                    isRound
                    onClick={handleIncrease}
                    isDisabled={isBusy || sessionValue > 59}
                    icon={<FaPlus />}
                    color={iconColor}
                    _hover={{
                        transform: "scale(1.1)"
                    }}
                />
            </Flex>
        </Fragment>
    );
};

export default SessionControls;
