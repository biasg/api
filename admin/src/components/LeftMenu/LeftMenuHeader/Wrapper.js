import styled from 'styled-components';

import Logo from '../../../assets/images/logo-won.svg';

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.theme.main.colors.leftMenu['background-header-link']};
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .projectName {
    display: block;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12rem;
  }
`;

export default Wrapper;
