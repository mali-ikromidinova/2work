import { SidebarData } from "../../data";
import {
  SidebarContent,
  SidebarNav,
  SidebarSec,
  SidebarTitle,
} from "./SidebarElements";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  return (
    <SidebarSec>
      <SidebarContent>
        <SidebarTitle>Все категории</SidebarTitle>
        <SidebarNav>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarNav>
      </SidebarContent>
    </SidebarSec>
  );
};

export default Sidebar;
