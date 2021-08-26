import { Fragment } from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { useStateValue } from '../../contexts/stateProvider';
import { actionTypes } from '../../reducer/reducer';

const BreakControls = () => {

    const [{ breakValue, isBusy }] = useStateValue();
    const [state, dispatch] = useStateValue();

    const handleIncrease = () => {
        dispatch({
            ...state,
            type: actionTypes.INCREASE_BREAK_VALUE,
            breakValue: breakValue + 1
        });
    };

    const handleDecrease = () => {
        dispatch({
            ...state,
            type: actionTypes.DECREASE_BREAK_VALUE,
            breakValue: breakValue - 1
        });
    };

    return (
        <Fragment>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="baseline">
                <IconButton 
                    size="md"
                    isRound
                    onClick={handleDecrease}
                    isDisabled={isBusy || breakValue <= 1}
                    icon={<FaMinus />}
                />
                <Text fontSize="lg">{ breakValue }</Text>
                <IconButton 
                    size="md"
                    isRound
                    onClick={handleIncrease}
                    isDisabled={isBusy || breakValue > 59}
                    icon={<FaPlus />}
                />
            </Flex>
        </Fragment>
    );
};

export default BreakControls;
