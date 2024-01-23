import { SearchIcon, InfoOutlineIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import './header.scss'
const logo = faker.image.avatar()
export default function Header() {
    return (
        <HStack justify={'space-between'} px={'20px'} alignItems={'center'} position={'fixed'} width={'100%'} top= '0' zIndex='1' className="bg-color" boxShadow={'0 2px 4px -1px rgba(57,76,96,.15)'} height={'72px'}>
            <Box>
                <Image src={logo} alt="logo" height={'30px'} width={'auto'} />
            </Box>   
            <HStack columnGap={'20px'}>
                <SearchIcon />
                <InfoOutlineIcon />
                <Button>Log in</Button>
                <Button>Sign up</Button>
                <SunIcon onClick={() => document.body.classList.toggle('dark')}/>
            </HStack>
        </HStack>
    )
}