import styled from 'styled-components';

const BasicButton = styled.button`
  background-color: purple;
  color: yellow;
  padding: 5px 10px 5px 10px;
  margin: 5px;
`;

const UnderLineButton = styled(BasicButton)`
  text-decoration: underline;
`;

const ItalicButtom = styled(UnderLineButton)`
  font-style: italic;
`;

export { BasicButton, UnderLineButton, ItalicButtom };
