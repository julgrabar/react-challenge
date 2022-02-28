import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocials } from './SocialIcons.styled';

export const Socials = () => {
    return (
        <StyledSocials>
            <li>
                <a href='https://twitter.com'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com'>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocials>
    )
}