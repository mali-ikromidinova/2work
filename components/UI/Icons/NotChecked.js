const notCheckedPic = "/images/icons/not-checked.svg";

import styled from "styled-components";
import Image from "next/image";

const NotCheckedImage = styled(Image)``;

const NotChecked = () => {
  return (
    <NotCheckedImage
      src={notCheckedPic}
      width={20}
      height={20}
      alt="not-checked"
    />
  );
};

export default NotChecked;
