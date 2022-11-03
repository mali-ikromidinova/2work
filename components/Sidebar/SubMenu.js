import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

import {
  DropdownLink,
  SidebarIcon,
  SidebarLabel,
  SidebarLink,
  SidebarLinkWrap,
} from "./SidebarElements";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [checked, setChecked] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
    setChecked(!checked);
  };

  return (
    <>
      <SidebarLink
        href={item.path}
        onClick={item.submenu && showSubnav}
        checked={checked}
      >
        <SidebarLinkWrap>
          <SidebarIcon checked={checked}>
            <BsCheckLg />
          </SidebarIcon>
          <SidebarLabel>{item.navItem}</SidebarLabel>
          <div>
            {item.submenu && subnav
              ? item.iconOpened
              : item.subnav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLinkWrap>
      </SidebarLink>
      {subnav &&
        item.submenu.map((item, index) => {
          return (
            <>
              <DropdownLink /* href={item.path} */ key={index} /* passHref */>
                <SidebarLinkWrap key={index}>
                  <SidebarIcon>
                    <BsCheckLg />
                  </SidebarIcon>
                  <SidebarLabel>{item.title}</SidebarLabel>
                </SidebarLinkWrap>
              </DropdownLink>
            </>
          );
        })}
    </>
  );
};

export default SubMenu;
