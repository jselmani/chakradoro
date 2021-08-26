import { Heading } from '@chakra-ui/react';

const Title = props => {
    const { size, text, paddingX, paddingY } = props;
    return (
        <Heading size={size} px={paddingX} py={paddingY}>
            { text }
        </Heading>
    );
}

export default Title;
