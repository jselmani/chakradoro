import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';

import { useStateValue } from '../../contexts/stateProvider';
import { useTimer } from '../../hooks/useTimer';
import Title from '../Title/Title.component';

const Timer = () => {
    
    const [{ projectName, timerLabel }] = useStateValue();
    const timeredValue = useTimer();

    return (
        <Fragment>
            <Title size="lg" text={projectName} />
            <Box paddingTop="2em">
                <Title size="sm" text={timerLabel} />
                <Title size="lg" text={timeredValue} />
            </Box>
        </Fragment>
    );
};

export default Timer;
