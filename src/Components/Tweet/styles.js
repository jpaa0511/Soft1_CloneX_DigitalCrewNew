import styled from "styled-components";

export const TweetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #2f3336;
  background-color: #000;
  color: #fff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const TweetContent = styled.div`
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  strong {
    margin-right: 5px;
    font-size: 15px;
  }

  span {
    font-size: 14px;
    color: #8899a6; /* Color para el handle del usuario */
  }
`;

export const TweetText = styled.p`
  font-size: 15px;
  color: #e1e8ed;
  margin-bottom: 10px;
`;

export const Interactions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    .MuiSvgIcon-root {
      font-size: 20px;
      color: #8899a6;
    }
  }
`;
