import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';

import { useStateValue } from '../../contexts/stateProvider';
import { useTimer } from '../../hooks/useTimer';
import TimerControls from '../TimerControls/TimerControls.component';
import Title from '../Title/Title.component';

const Timer = () => {
    
    const [{ projectName, timerLabel }] = useStateValue();
    const timeredValue = useTimer();

    return (
        <Fragment>
            <Title size="lg" text={projectName} />
            <Box p="1.5rem" m="2rem" borderRadius="30px" border="2px" align="center">
                <Title size="md" text={timerLabel} />
                <Title size="3xl" text={timeredValue} padding="10px"/>
                <TimerControls />
            </Box>
        </Fragment>
    );
};

export default Timer;
