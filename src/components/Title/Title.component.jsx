import { Heading } from '@chakra-ui/react';

const Title = props => {
    const { size, text, paddingX, paddingY, color } = props;

    return (
        <Heading 
            size={size} 
            px={paddingX} 
            py={paddingY}
            color={color}
        >
            { text }
        </Heading>
    );
}

export default Title;
