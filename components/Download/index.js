/* import { SectionTitle } from "../styles/globalStyles.js"; */
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
const DownloadImg = "/images/main_screen/phone.png";
const LogoPic = "/images/icons/logo.svg";
const StarPic = "/images/icons/star.svg";
const qrPic = "/images/qr.png";
import {
  Button,
  ButtonLink,
  ButtonLinkWrap,
  DownloadButtons,
  DownloadContent,
  DownloadDescr,
  DownloadIcon,
  DownloadPic,
  DownloadPicWrapper,
  DownloadQr,
  DownloadSec,
  DownloadStats,
  DownloadStatsBlock,
  DownloadWrap,
} from "./DownloadElements";
import { SectionTitle } from "../../styles/globalStyles";

const Download = () => {
  return (
    <DownloadSec>
      <DownloadContent>
        <SectionTitle light small>
          2work.uz — работа в Ташкенте
        </SectionTitle>
        <DownloadWrap>
          <DownloadIcon>
            <img src={LogoPic} alt="logo" />
          </DownloadIcon>
          <DownloadStats>
            <DownloadStatsBlock>
              3.6
              <img src={StarPic} alt="star" />
              <br /> 66 отзывов
            </DownloadStatsBlock>
            <DownloadStatsBlock>
              10 тыс.+ <br /> Количество скачиваний
            </DownloadStatsBlock>
          </DownloadStats>
        </DownloadWrap>
        <DownloadDescr>
          Скачивайте мобильное приложение 2work и получите доступ ко всем
          функциям сервиса, которые недоступны на сайте.
        </DownloadDescr>
        <DownloadButtons>
          <Button>
            <ButtonLink href="/">
              <ButtonLinkWrap>
                <IoLogoGooglePlaystore />
                Google Play
              </ButtonLinkWrap>
            </ButtonLink>
          </Button>
          <Button>
            <ButtonLink href="/">
              <ButtonLinkWrap>
                <IoLogoApple />
                App Store
              </ButtonLinkWrap>
            </ButtonLink>
          </Button>
        </DownloadButtons>
      </DownloadContent>
      <DownloadPicWrapper>
        <DownloadPic layout="fill" src={DownloadImg} />
      </DownloadPicWrapper>
      <DownloadQr>
        <img src={qrPic} alt="QR" />
      </DownloadQr>
    </DownloadSec>
  );
};

export default Download;
