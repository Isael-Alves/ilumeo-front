import styled from "styled-components";

const Top = styled.header`
  height: 145px;
  width: 365px;
  margin-bottom: 19px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .confirmationData {
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 14px;
      margin-bottom: 20px;

      color: #f5f5f5;
    }

    li {
      margin-left: 20px;
      list-style-type: circle;

      font-weight: 400;
      font-size: 15px;
      line-height: 14px;
      margin-bottom: 3px;

      color: #f5f5f5;
    }
  }
 
  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;

      color: #f5f5f5;
    }

    h2 {
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;

      color: rgba(207, 207, 207, 0.69);
    }

    div {
      text-align: end;
    }
  }

  .clock {
    div {
      font-weight: 700;
      font-size: 23px;
      line-height: 28px;

      color: #f5f5f5;
    }

    h1 {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;

      color: #f5f5f5;
    }
  }
`;

const StyleHistoric = styled.section`
  height: 495px;
  width: 365px;

  h1 {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: #f5f5f5;
  }

  ul {
    overflow-y: scroll;
    height: 480px;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
    }

    li {
      width: 100%;
      height: 41px;
      margin-top: 7px;
      padding: 13px;

      display: flex;
      justify-content: space-between;

      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      color: #cfcfcf;

      background-color: rgba(217, 217, 217, 0.05);
      border-radius: 4px;

      .date {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        color: #cfcfcf;
      }

      .time {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;

        color: #f5f5f5;
      }
    }
  }
`;

export { Top, StyleHistoric };
