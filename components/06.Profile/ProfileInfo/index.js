import Checked from "../../UI/Icons/Checked";
import NotChecked from "../../UI/Icons/NotChecked";
import {
  GreyButton,
  GreyButtonAnchor,
  GreyButtonImage,
  GreyButtonLink,
  ProfileDescr,
  ProfileDetails,
  ProfileImage,
  ProfileInfoBox,
  ProfileInfoContent,
  ProfileInfoHeader,
  ProfileInfoText,
  ProfileName,
  ProfilePersonal,
  ProfilePersonalItem,
  ProfilePic,
  ProfilePicAnchor,
  ProfilePicChange,
  ProfileTitle,
  ProfileVerifyAnchor,
  ProfileVerifyLink,
} from "./ProfileInfoElements";

const changePic = "/images/icons/change.svg";
const profileImg = "/images/perfomers/shoxista.png";

const ProfileInfo = () => {
  return (
    <ProfileInfoBox>
      <ProfileInfoContent>
        <ProfileInfoHeader>
          <ProfileImage>
            <ProfilePic
              src={profileImg}
              alt="profile"
              width={200}
              height={200}
            />
            <ProfilePicChange href="/" passHref>
              <ProfilePicAnchor>Изменить</ProfilePicAnchor>
            </ProfilePicChange>
          </ProfileImage>
          <ProfileInfoText>
            <ProfileName>Шохиста Абдуллаева</ProfileName>
            <ProfileDetails>Зарегистрирована: 24.09.2021</ProfileDetails>
            <ProfileDetails>Была в сети: 20.09.2021</ProfileDetails>
          </ProfileInfoText>
        </ProfileInfoHeader>
        <ProfileDescr>
          <ProfileTitle>Обо мне</ProfileTitle>
          Действующий школьный учитель. Опыт работы в школе 9 лет. Проведение
          индивидуальных занятий со школьниками 5–11 классов. Профессиональное
          устранение любых пробелов в знаниях, доходчивое объяснение учебного
          материала, подготовка к успешной сдаче экзамена.
        </ProfileDescr>
        <ProfilePersonal>
          <ProfileTitle>Личные данные</ProfileTitle>
          <ProfilePersonalItem>
            <Checked />
            <a href="tel:+998901234567">+998 (90) 123-45-67</a>
          </ProfilePersonalItem>
          <ProfilePersonalItem>
            <NotChecked />
            <a href="mailto:shoxista.abd@gmail.com">shoxista.abd@gmail.com</a>
            <ProfileVerifyLink href="/" passHref>
              <ProfileVerifyAnchor>Верефицировать</ProfileVerifyAnchor>
            </ProfileVerifyLink>
          </ProfilePersonalItem>
        </ProfilePersonal>
        <GreyButton>
          <GreyButtonLink href="/" passHref>
            <GreyButtonAnchor>
              <GreyButtonImage
                src={changePic}
                width={15}
                height={15}
                alt="change"
              />
              Изменить данные
            </GreyButtonAnchor>
          </GreyButtonLink>
        </GreyButton>
      </ProfileInfoContent>
    </ProfileInfoBox>
  );
};

export default ProfileInfo;
