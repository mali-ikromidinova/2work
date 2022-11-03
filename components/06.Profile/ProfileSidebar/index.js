import { ProfileSidebarData } from "./data";
import {
  ProfileSidebarBox,
  ProfileSidebarContent,
  ProfileSidebarImage,
  ProfileSidebarItem,
  ProfileSidebarNav,
  ProfileSidebarText,
} from "./ProfileSidebarElements";

const ProfileSidebar = () => {
  return (
    <ProfileSidebarBox>
      <ProfileSidebarContent>
        <ProfileSidebarNav>
          {ProfileSidebarData.map((item, index) => {
            return (
              <ProfileSidebarItem key={index}>
                <ProfileSidebarImage
                  width={27}
                  height={27}
                  src={item.pic}
                  alt="sidebar"
                />
                <ProfileSidebarText>{item.label}</ProfileSidebarText>
              </ProfileSidebarItem>
            );
          })}
        </ProfileSidebarNav>
      </ProfileSidebarContent>
    </ProfileSidebarBox>
  );
};

export default ProfileSidebar;
