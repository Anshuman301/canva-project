import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react"
import {faker} from '@faker-js/faker';
import { useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
function App() {
  return (
    <>
    <Header />
    <Template />
    <Footer />
    </>
  )
}

const attributes= ['nature', 'abstract', 'animals', 'nightlife']
const width = [234, 256, 267];
const height = [251, 298, 308]

const initImages = Array.from(Array(16), () => faker.image.urlLoremFlickr({
  category: attributes[Math.floor(Math.random() * attributes.length)],
  height: height[Math.floor(Math.random() * height.length)],
  width: width[Math.floor(Math.random() * width.length)]
}))

function Template() {
  console.log(initImages)
  const [images,] = useState(initImages)
  return (
    <VStack>
      <Text textStyle={'h2'}>
        Templates for Absolute Anything
      </Text>
      <Text textStyle={'p'}>
        Customise an office template, or design something more personal, like an invitation.
      </Text>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="10px">
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

function Header() {
  return null;
}

function Footer() {
  return (
      <HStack sx={{
        pos: 'fixed',
        bottom: 0,
        width: '100%'
      }} justify={'center'}>
        <Button>Start designing</Button>
        <Button>Login</Button>
      </HStack>
  )
}
export default App
