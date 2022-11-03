import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import {
  SocialIcon,
  SocialIconAnchor,
  SocialIconLink,
  SocialIconsWrapper,
} from "./SocialIconsElements";
const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <SocialIcon className="telegram">
        <SocialIconLink href="/" passHref>
          <SocialIconAnchor>
            <FaTelegramPlane />
          </SocialIconAnchor>
        </SocialIconLink>
      </SocialIcon>
      <SocialIcon className="youtube">
        <SocialIconLink href="/" passHref>
          <SocialIconAnchor>
            <FaYoutube />
          </SocialIconAnchor>
        </SocialIconLink>
      </SocialIcon>
      <SocialIcon className="instagram">
        <SocialIconLink href="/" passHref>
          <SocialIconAnchor>
            <FaInstagram />
          </SocialIconAnchor>
        </SocialIconLink>
      </SocialIcon>
      <SocialIcon className="facebook">
        <SocialIconLink href="/" passHref>
          <SocialIconAnchor>
            <FaFacebookF />
          </SocialIconAnchor>
        </SocialIconLink>
      </SocialIcon>
    </SocialIconsWrapper>
  );
};

export default SocialIcons;
