import * as React from 'react';
import { ReactComponent as ChildCare } from 'assets/svg/child_care.svg';

import styled from "styled-components";

const Icon = styled(ChildCare)`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  animation: spin 0.9s infinite linear;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
`;

export default () => <Icon />;