import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 0.6;
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
  position: relative;
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
      color: #ffffff;
      background-color: transparent;
      caret-color: #ffffff;
      &::placeholder {
        color: #a0a0a0;
      }
    }
  }
  > input {
    margin-left: 50px;
    margin-top: 7px;
    width: 8%;
    border: none;
    outline: 0;
    font-size: 14px;
    line-height: 21px;
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

export const DivURL = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  > input {
    padding: 10px;
    font-size: 14px;
    border: none;
    margin-left: 25px;
    background-color: transparent;
    caret-color: #ffffff;
  }

  > button {
    background-color: var(--twittercolor);
    border: none;
    color: white;
    font-weight: bold;
    padding: 5px 20px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #1a91da;
    }
  }
`;

export const DivIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
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

export const File = styled.input.attrs({ type: "file" })`
  position: absolute;
  z-index: 10;
  opacity: 0;
  cursor: pointer;

  &.primary {
    top: 0;
    left: -51px;
  }

  &.secondary {
    top: 25px;
    left: 16px;
    width: 30px;
  }

  &.tertiary {
    top: 25px;
    left: 56px;
    width: 30px;
  }
`;

/* ------ Ini Post------- */

export const Post = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  .post-avatar {
    margin-top: 5px;
  }
`;
export const Images = styled.img`
  border-radius: 20px;
  min-width: 100%;
  width: 100%;
  min-height: 300px;
`;
export const PostBody = styled.div`
  padding-left: 10px;
  width: 100%;
  overflow: hidden;
  > div span {
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
  }
  post_icon {
    font-size: 14px !important;
    color: var(--twitterColor) !important;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
`;
export const PostDescription = styled.div`
  margin-bottom: 20px;
  > p {
    margin: 0;
    padding: 0;
    color: #fafbfd;
    font-size: 16px;
    line-height: 16.6875px;
  }
`;
export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #5b7083;
  transition: all 100ms ease-in;
  > .MuiSvgIcon-root:hover:nth-child(1) {
    fill: #fafbfd;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover:nth-child(2) {
    fill: #fafbfd;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover:nth-child(3) {
    fill: #fafbfd;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover:nth-child(4) {
    fill: #fafbfd;
    cursor: pointer;
  }
`;
