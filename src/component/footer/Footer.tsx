import { HStack, Button } from "@chakra-ui/react"

export default function Footer() {
    return (
        <HStack sx={{
          pos: 'fixed',
          width: '100%'
        }} justify={'center'} 
        height={'72px'}
        onScroll={(e) => {
          console.log(e)
        }}
        bottom={0}
        transition={'linear .25s bottom'}
        className="Hstack bg-color"
        boxShadow={'0 -2px 4px -1px rgba(57,76,96,.15)'}
        >
          <Button>Start designing</Button>
          <Button>Login</Button>
        </HStack>
    )
  }