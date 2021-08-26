import { Box, Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

import { useStateValue } from '../../contexts/stateProvider';
import { useTimer } from '../../hooks/useTimer';
import BreakControls from '../BreakControls/BreakControls.component';
import SessionControls from '../SessionControls/SessionControls.component';
import TimerControls from '../TimerControls/TimerControls.component';
import Title from '../Title/Title.component';

const Timer = () => {
    
    const [{ projectName, timerLabel }] = useStateValue();
    const timeredValue = useTimer();

    return (
        <Fragment>
            <Title size="lg" text={projectName} />
            <Box p="2em" m="2rem" borderRadius="30px" border="2px" align="center">
                <Title size="md" text={timerLabel} />
                <Title size="3xl" text={timeredValue} paddingX="10px" paddingY="10px"/>
                <TimerControls />
            </Box>
            <Flex flexDirection="row" justifyContent="center">
                <Box mx="1em">
                    <Title size="md" text="Break Length" paddingX="1em" paddingY=".5em"/>
                    <BreakControls />
                </Box>
                <Box mx="1em">
                    <Title size="md" text="Session Length" paddingX=".6em" paddingY=".5em"/>
                    <SessionControls />
                </Box>
            </Flex>
        </Fragment>
    );
};

export default Timer;
