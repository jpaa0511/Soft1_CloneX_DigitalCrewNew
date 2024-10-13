import styled from "styled-components";

export const Container = styled.div`
  flex: 0.5;
  max-width: 600px;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid #e6ecf0;
  padding: 4px 20px;

  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #14171a;
  }
`;

/*BoxTwitter */
export const Boxtwitter = styled.div`
  padding: 5px 15px;
  border-bottom: 1px solid #ddd;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border-radius: fill;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  > .columbus {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    > input {
      margin-left: 10px;
      margin-top: 10px;
      width: 100%;
      border: none;
      outline: 0;
      font-size: 19px;
      line-height: 25px;
      color: #0f1419;
    }
  }
  > input {
    margin-left: 30px;
    margin-top: 18px;
    width: 55%;
    border: none;
    outline: 0;
    font-size: 19px;
    line-height: 25px;
    color: #0f1419;
  }
  > Button {
    background-color: var(--twittercolor) !important;
    boder: none !important;
    color: white !important;
    font-weight: 600 !important;
    width: 80px !important;
    height: 32px !important;
    margin-top: 20px !important;
    border-radius: 30px !important;
    text-transform: inherit !important;
  }
`;

export const DivIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > .MuiSvgIcon-root {
    fill: var(--twittercolor);
    margin-left: 1rem;
    border: 2px solid var(--twittercolor)
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: colum;
`;

export const Button = styled.button`
  background-color: var(--twittercolor);
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1a91da;
  }
`;
