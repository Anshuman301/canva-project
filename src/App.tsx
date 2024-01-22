import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react"
import {faker} from '@faker-js/faker';
import { useLayoutEffect, useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Header from "./component/header/Header";
import FirstContent from "./component/carousal/FirstContent";
import CreateWithAI from "./component/section/CreateWithAI";
import Partner from "./component/carousal/Partner";
function App() {
  return (
    <>
    <Header />
    <FirstContent/>
    <Partner />
    <CreateWithAI />
    <Template />
    <Footer />
    </>
  )
}
const width = [300];
const height = [200, 400]

const initImages = Array.from(Array(16), () => faker.image.urlLoremFlickr({
  category: 'unsplash',
  height: height[Math.floor(Math.random() * height.length)],
  width: width[Math.floor(Math.random() * width.length)]
}))

function Template() {
  const [images,] = useState(initImages)
  return (
    <VStack p={'30px'} mb={'72px'}>
      <Text textStyle={'h2'} textAlign={'center'}>
        Templates for Absolute Anything
      </Text>
      <Text textStyle={'p'} textAlign={'center'}>
        Customise an office template, or design something more personal, like an invitation.
      </Text>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5}} style={{
        width: '100%'
      }}>
        <Masonry gutter="10px" >
          {
            images.map((ele, id) => {
              return (
                  <Image src={ele} width={'max-content'} height={'auto'} key={id}/>
              )
            })
          }
        </Masonry>
      </ResponsiveMasonry>
    </VStack>
  )
}
function Footer() {
  const [bottom, setBottom] = useState('-72px')
  function handleScroll(this: Window) {
    if(this.scrollY > 5) 
    setBottom('0')
    else
    setBottom('-72px')
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
      <HStack sx={{
        pos: 'fixed',
        width: '100%'
      }} justify={'center'} 
      height={'72px'}
      onScroll={(e) => {
        console.log(e)
      }}
      bottom={bottom}
      transition={'linear .25s bottom'}
      backgroundColor={'white'} boxShadow={'0 -2px 4px -1px rgba(57,76,96,.15)'}
      >
        <Button>Start designing</Button>
        <Button>Login</Button>
      </HStack>
  )
}
export default App
