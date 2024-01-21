import { Box, Image, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import Slider from "react-slick";
import './carousal.scss';

const images = Array.from(Array(12), () => faker.image.urlLoremFlickr({
    category: 'business',
    height: 200
}))

const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }
export default function Partner() {
    return (
        <Box width={'100%'} px={'30px'} className="partner" py={'30px'}>
            <Text textStyle={'h2'} textAlign={'center'}>Supporting partners</Text>
        <Slider {...settings} arrows={false} className="carousal">
            {
                images.map((ele, idx) => (
                    <Box key={`image-${idx}`}>
                        <Image src={ele} alt={`image-${idx}`} />
                    </Box>
                ))
            }
        </Slider>
        </Box>
    )
}