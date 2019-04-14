import styled, { keyframes } from 'styled-components';
 
export const CoolBox = styled.div`
  animation-name: fadein;
  animation-duration: 3s;
  text-align: center;
  color: white; 
  font-size: 80px; 
  width: 100%; 
  padding: 20px; 
`

const fadein = keyframes`
  0%{
    opacity: 0;
}
  100%{
    opacity: 1;
}
`

export default CoolBox