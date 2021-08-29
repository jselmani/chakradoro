import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
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
    const boxColor = useColorModeValue('red.500', 'gray.900');
    const sessionTitleColor = useColorModeValue('gray.100');
    const iconColor = useColorModeValue('red.500');

    return (
        <Fragment>
            <Title size="xl" text={projectName} />
            <Box p="2em" m="2rem" borderRadius="50px" align="center" boxShadow="base" bg={boxColor}>
                <Title size="lg" text={timerLabel} color={sessionTitleColor}/>
                <Title size="3xl" text={timeredValue} paddingX="10px" paddingY="10px" color={sessionTitleColor}/>
                <TimerControls />
            </Box>
            <Flex flexDirection="row" justifyContent="center">
                <Box mx="1em">
                    <Title size="md" text="Break Length" paddingX="1em" paddingY=".5em"/>
                    <BreakControls iconColor={iconColor}/>
                </Box>
                <Box mx="1em">
                    <Title size="md" text="Session Length" paddingX=".6em" paddingY=".5em"/>
                    <SessionControls iconColor={iconColor}/>
                </Box>
            </Flex>
        </Fragment>
    );
};

export default Timer;
