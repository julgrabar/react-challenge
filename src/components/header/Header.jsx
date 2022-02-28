import { StyledHeader, Logo, Nav, Image } from "./Header.styled";
import { Container } from "components/container/Container.styled";
import { Button } from "components/Button/Button.styled";
import logo from '../images/logo.svg';
import imageMockups from '../images/illustration-mockups.svg';
import { Flex } from "components/container/flex.styled";

export function Header(){
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src={logo} />
                <Button>Try It Free</Button>
            </Nav>

            <Flex>
            <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
                Get Started For Free
            </Button>
            </div>

            <Image src={imageMockups} alt='' />
            </Flex>
            </Container>
        </StyledHeader>
    )
}