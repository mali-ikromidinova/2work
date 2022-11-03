import { Container } from "../../styles/globalStyles";
import "semantic-ui-css/semantic.min.css";
/* import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/input.min.css";
import "semantic-ui-css/components/icon.min.css";
import "semantic-ui-css/components/dropdown.min.js"; */
import Button from "../UI/Buttons";

import {
  DropdownStyled,
  HeaderLogo,
  HeaderLogoLink,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemIcon,
  HeaderNavList,
  HeaderSearch,
  HeaderSection,
  HeaderWrapper,
  StyledInput,
} from "./HeaderElements";

const LogoPic = "/images/2work.svg";
const notification = "/images/icons/notification.svg";
const profile = "/images/icons/profile.svg";

const langOptions = [
  { key: 1, text: "UZ", value: 1 },
  { key: 2, text: "RU", value: 2 },
];

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <HeaderLogoLink href="/">
            <HeaderLogo width={120} height={60} src={LogoPic} alt="logo" />
          </HeaderLogoLink>
          {/* <HeaderSearch
            placeholder="Найти задание или исполнителя"
            type="text"
          ></HeaderSearch> */}
          <StyledInput
            icon="search"
            placeholder="Найти задание или исполнителя"
          />
          <HeaderNav>
            <HeaderNavList>
              <DropdownStyled
                text={langOptions[0].text}
                defaultValue={langOptions[0].text}
                options={langOptions}
              />
              <HeaderNavItem href="/">
                <HeaderNavItemIcon width={24} height={24} src={notification} />
              </HeaderNavItem>
              <HeaderNavItem href="/">
                <HeaderNavItemIcon width={24} height={24} src={profile} />
              </HeaderNavItem>
            </HeaderNavList>
          </HeaderNav>
          <Button path="/perfomers" content="Исполнителям" />
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
