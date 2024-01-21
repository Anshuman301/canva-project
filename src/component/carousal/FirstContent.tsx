import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

export default function FirstContent() {
    return (
        <VStack mt={'72px'}>
            <Text textStyle={'h1'} textAlign={'center'}>What will you design today</Text>
            <Text textStyle={'subtitle'} textAlign={'center'}>Canva make it easy to create professional designs and to share or  print them</Text>
            <Button>Signup for free</Button>
            <Carousal/>
        </VStack>
    )
}

const images = Array.from(Array(16), () => faker.image.urlLoremFlickr({
    category: 'abstract',
    width: 176,
    height: 240
}))

function Carousal() {
    return (
       <HStack pos={'relative'} alignItems={'center'} width={'100%'}>
        <HStack width={'100%'} overflowX={'auto'} columnGap={'20px'} sx={{
            "&::-webkit-scrollbar": {
                display: "none"
            }
        }}>
        {
            images.map((ele, idx) => (
                <Box>
                    <Image src={ele} alt={`image-${idx}`} key={idx} maxWidth={'unset'}/>
                </Box>
            ))
        }
        </HStack>
       </HStack>
    )
}