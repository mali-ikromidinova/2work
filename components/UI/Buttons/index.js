import { Btn, BtnLink, BtnLinkStyled } from "./ButtonStyle";

const Button = ({ content, path, big }) => {
  return (
    <Btn>
      <BtnLink big={big} href={path} passHref>
        <BtnLinkStyled>{content}</BtnLinkStyled>
      </BtnLink>
    </Btn>
  );
};

export default Button;
