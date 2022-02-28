import { StyledFooter } from "./Footer.styled";
import { Socials } from "components/SocialIcons/FooterSocials";
import { Container } from "components/container/Container.styled";
import { Flex } from "components/container/flex.styled";
import logoWhite from '../images/logo_white.svg'

export const Footer = () =>{
    return(
        <StyledFooter>
             <Container>
        <img src={logoWhite} alt='' />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <Socials/>
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
        </StyledFooter>
    )
}