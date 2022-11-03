const LogoPic = "/images/icons/logo-white.svg";
const InWeb = "/images/icons/inweb.svg";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  FooteInfo,
  FooteLogo,
  FooterBlock,
  FooterContacts,
  FooterContent,
  FooterInfoBlock,
  FooterInfoWrap,
  FooterLine,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterListTitle,
  FooterLogoLink,
  FooterNav,
  FooterNavItem,
  FooterNavLink,
  FooterSec,
  FooterSocial,
  FooterSocialItem,
  FooterText,
  FooterWrapper,
  WebsiteRights,
  WebsiteRightsAnchor,
  WebsiteRightsBlock,
  WebsiteRightsLink,
} from "./FooterElements";
import { Container } from "../../styles/globalStyles";

const Footer = ({ forms }) => {
  return (
    <FooterSec forms={forms}>
      <Container>
        <FooterContent>
          <FooterWrapper>
            <FooterBlock>
              <FooterLogoLink href="/">
                <FooteLogo width={250} height={90} src={LogoPic} alt="logo" />
              </FooterLogoLink>
              <FooterInfoBlock>
                <FooteInfo href="/">
                  <FooterInfoWrap>
                    Условия использования материалов и
                    <span> правовая информация</span>
                  </FooterInfoWrap>
                </FooteInfo>
                <FooteInfo href="/">
                  <FooterInfoWrap>
                    Информация об использовании <span>персональных данных</span>
                  </FooterInfoWrap>
                </FooteInfo>
              </FooterInfoBlock>
            </FooterBlock>
            <FooterBlock>
              <FooterNav>
                <FooterNavItem href="/" passHref>
                  <FooterNavLink>ГЛАВНАЯ</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem href="/" passHref>
                  <FooterNavLink>Найти работу</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem href="/" passHref>
                  <FooterNavLink>Найти исполнителя</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem href="/news" passHref>
                  <FooterNavLink>Новости</FooterNavLink>
                </FooterNavItem>
              </FooterNav>
            </FooterBlock>
            <FooterBlock>
              <FooterList>
                <FooterListTitle>сервис</FooterListTitle>
                <FooterListItem href="/rules" passHref>
                  <FooterNavLink>Правила сервиса</FooterNavLink>
                </FooterListItem>
                <FooterListItem href="/privacy" passHref>
                  <FooterNavLink>Конфиденциальность</FooterNavLink>
                </FooterListItem>
                <FooterListItem href="/" passHref>
                  <FooterNavLink>Как создать задание?</FooterNavLink>
                </FooterListItem>
                <FooterListItem href="/" passHref>
                  <FooterNavLink>Как стать исполнителем?</FooterNavLink>
                </FooterListItem>
                <FooterListItem href="/" passHref>
                  <FooterNavLink>Часто задаваемые вопросы</FooterNavLink>
                </FooterListItem>
              </FooterList>
            </FooterBlock>
            <FooterBlock>
              <FooterSocial>
                <FooterSocialItem>
                  <FaTelegramPlane />
                </FooterSocialItem>
                <FooterSocialItem>
                  <FaFacebookF />
                </FooterSocialItem>
                <FooterSocialItem>
                  <FaInstagram />
                </FooterSocialItem>
                <FooterSocialItem>
                  <FaYoutube />
                </FooterSocialItem>
              </FooterSocial>
              <FooterContacts>
                <FooterLink href="tel:+998946467545">
                  +998 94 646 75 45
                </FooterLink>
                <FooterText>Служба поддержки</FooterText>
              </FooterContacts>
              <FooterContacts>
                <FooterLink href="mailto:info@2work.uz">
                  info@2work.uz
                </FooterLink>
                <FooterText>Почта</FooterText>
              </FooterContacts>
            </FooterBlock>
          </FooterWrapper>
          <FooterLine />
          <WebsiteRights>
            <WebsiteRightsBlock>
              2022 © 2Work. Все права защищены.
            </WebsiteRightsBlock>
            <WebsiteRightsLink href="/" passHref>
              <WebsiteRightsAnchor>
                Разработка -
                <img src={InWeb} alt="inweb" />
              </WebsiteRightsAnchor>
            </WebsiteRightsLink>
          </WebsiteRights>
        </FooterContent>
      </Container>
    </FooterSec>
  );
};

export default Footer;
