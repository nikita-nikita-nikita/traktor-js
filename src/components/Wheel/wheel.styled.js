import styled from "styled-components";
import { layout, position } from 'styled-system'

export const Wheel = styled.div`
  border-radius: 50%;
  background: #000;
  position: relative;
  ${layout}
`;

export const Bolt = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background: yellow;
  top: calc(25% - 7.5px);
  left: calc(50% - 7.5px);
  ${position}
`;