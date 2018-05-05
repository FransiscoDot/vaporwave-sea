import React from 'react';
import styled from "styled-components";

const Head = styled.div`
  background-color: pink;
  text-align: center;
`;

const Title = styled.div`
  fontSize: 25;
  margin: 10;
`;

const Header = () => {
  return (
    <Head>
      <Title>Ｖａｐｏｒｗａｖｅ　ボョ下</Title>
    </Head>
  )
}

export default Header;
