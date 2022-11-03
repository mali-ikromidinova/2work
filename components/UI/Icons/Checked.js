const checkedPic = "/images/icons/checked.svg";

import styled from "styled-components";
import Image from "next/image";

const CheckedImage = styled(Image)``;

const Checked = () => {
  return <CheckedImage src={checkedPic} width={20} height={20} alt="checked" />;
};

export default Checked;
