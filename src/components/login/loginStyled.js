import styled from "styled-components";

const Body = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
`;

const Section = styled.section`
  height: 200px;
  width: 365px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 40px;

    color: #cfcfcf;
    span {
      font-weight: 800;
    }
  }

  div {
    width: 365px;
    height: 60px;
    padding: 7px 17px;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;

    background: #1e2733;
    border-radius: 4px;
    color: #ffffff;

    label {
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      height: 20px;
    }

    input {
      border: none;
      background-color: transparent;
      box-shadow: none;
      width: 100%;
      height: 40px;
      outline: none;

      font-style: normal;
      font-weight: 500;
      font-size: 21.6px;
      line-height: 26px;
      color: #ffffff;

      ::placeholder {
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      opacity: 0.2;
      color: #dbdbdb;
    }
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 47px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #1e2733;

  background: linear-gradient(124.18deg, #fe8a00 22.06%, #fe8a00 81.62%);
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

export { Button, Section, Body}