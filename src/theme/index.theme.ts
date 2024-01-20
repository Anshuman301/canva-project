import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    textStyles: {
        h1: {
            fontSize: '4.8rem',
            lineHeight: '6.4rem',
            fontWeight: 700
        },
        h2: {
          fontSize: '3.2rem',
          fontWeight: 700,
          lineHeight: '4.2rem'
        },
        subtitle: {
            fontSize: '2.1rem',
            lineHeight: '3.2rem',
            fontWeight: 400
        },
        p: {
          fontSize: '1.6rem',
          fontWeight: 400,
          lineHeight: '2.6rem',
        },
        // icon: {
        //   lg: {
        //     fontSize: pxToAll(40),
        //   },
        //   md: {
        //     fontSize: pxToAll(24),
        //   },
        //   sm: {
        //     fontSize: pxToAll(18),
        //   },
        // },
      },
})

export default theme;