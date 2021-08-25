import { Heading } from '@chakra-ui/react';

const Title = props => {
    const { size, text, padding } = props;
    return (
        <Heading size={size} p={padding}>
            { text }
        </Heading>
    );
}

export default Title;
