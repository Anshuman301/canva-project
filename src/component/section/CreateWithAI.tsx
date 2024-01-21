import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const image = faker.image.urlLoremFlickr({
    category: 'unspash',
})
export default function CreateWithAI() {
    return (
        <HStack flexWrap={'wrap'} alignItems={'center'} px={'30px'} justify={'space-between'} py={'30px'}>
            <VStack width={['100%',, '40%']}>
                <Text textStyle={'h2'} alignSelf={'flex-start'}>Create with AI</Text>
                <Text textStyle={'p'} >Redefine the way you create with Magic Studio, our suite of AI-powered tools. Generate copy in your brand voice with </Text>
                <Button>Discover Now</Button>
            </VStack>
            <Box width={['100%',, '50%']}>
                <Image src={image} alt='image' borderRadius={'10px'} />
            </Box>
        </HStack>
    )
}