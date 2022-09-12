import {Link, Text, useColorModeValue, Image} from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const sibaIcon = `/images/sibaIcon${useColorModeValue('', '-dark')}.ico`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={sibaIcon} width={6} height={6} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Runded 1c'
                        fontWeight="bold"
                        ml={3}>
                        Costs controller
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo