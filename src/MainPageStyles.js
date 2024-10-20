import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1250px;
  margin: 0 auto;
  background-color: #000000;
  border: none;
`;

export const LogoutButton = styled.button`
  background-color: var(--twittercolor);
  border: none;
  color: white;
  font-weight: 800 !important;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a91da;
  }
`;
