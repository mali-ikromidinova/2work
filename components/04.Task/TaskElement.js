import styled from "styled-components";

export const TaskContent = styled.div`
  padding: 40px 0;
`;
export const TaskWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 3rem;
`;
export const TaskContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 70%;
`;
export const TaskContentBlockSmall = styled(TaskContentBlock)`
  width: 25%;
`;
