import React from 'react';
import styled from 'styled-components';
type FooterProps = {
  theme: String;
};
export default function Footer(props: FooterProps) {
  const FooterBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(p2) => (p2.theme === 'basic' ? 'skyblue' : 'yellow')};
    text-align: center;
  `;
  return <FooterBox theme={props.theme}>Footer</FooterBox>;
}
