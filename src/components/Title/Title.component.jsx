import { Heading } from '@chakra-ui/react';

const Title = props => {
    const { size, text } = props;
    return (
        <Heading size={size}>
            { text }
        </Heading>
    );
}

export default Title;
