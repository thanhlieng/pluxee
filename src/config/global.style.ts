import { Descriptions, Select } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { antOverrideCssVariables, commonThemeVariables, lightThemeVariables } from './themes/themeVariables';
import { resetCss } from './resetCss';

const GlobalStyle = createGlobalStyle`
 
  ${resetCss}

  :root {
    ${lightThemeVariables};
    ${commonThemeVariables};
    ${antOverrideCssVariables};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  // html {
  //   height: 100%;
  //   max-width: 100vw;
  //   overflow: hidden;
  //   line-height: 1.6rem;
  //   font-weight: 500;
  //   box-sizing: border-box;
  // }

  * {
    box-sizing: inherit;
    font-family: 'Quicksand', sans-serif !important;
  }

  // body {
  //   padding: 0;
  //   margin: 0;
  //   min-height: 100vh;
  //   width: 100vw;
  //   overflow-x: hidden;
  //   /* font-size: 1.5rem; */
  // }

  section.ant-layout {
    max-height: 100vh;
    overflow: hidden;
    min-height: 100vh;
  }
  aside.ant-layout-sider {
    min-height: 100vh;
    box-shadow: 5px 0 5px -5px #e5e5e5;
  }

  #app-site {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  #__next {
   height: 100%;
  }

  .ant-descriptions-item-content {
    font-weight: bold;
  }

  span.ant-descriptions-item-label {
    min-width: 100px;
  }


  .ant-descriptions-bordered .ant-descriptions-view {
    border: none;
  }

  /* .gx-layout-sider-dark {
    background: rgba(24, 60, 128, 1);
  }
  ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-dark {
    background-color: transparent;
  } */
  label.ant-form-item-no-colon {
    white-space: break-spaces;
}

.gx-layout-sider-scrollbar {
  height: 100%;
}

.disabled {
   pointer-events: none; 
   opacity: 0.5;
   text-decoration: line-through;
}

.gx-app-nav > li {
  cursor: pointer;
}


.row-dragging td {
  padding: 16px;
}

.row-dragging .drag-visible {
  visibility: visible;
}

@media screen and (max-width: 575px) {
  .gx-main-content-wrapper {
    padding: 6px 0 0;
  }
}
 
.home_picker * {
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 0;
}

.home_picker .rdrMonth {
  padding-bottom: 4px
}
@media screen and (max-width: 1367px) {
  .home_picker * {
    font-size: 13px;
  }
}
.ant-upload-list-item-info img.ant-upload-list-item-image {
  & {
    object-fit: cover !important;
  }
}

::-webkit-input-placeholder { /* Edge */
  font-weight: 600 !important;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-weight: 600 !important;
}

::placeholder {
  font-weight: 600 !important;
}

.ant-popover-buttons {
  display: flex;
  justify-content: center;
}

`;

export const DefaultSelectStyled = styled(Select)`
    width: 200px;
`;

export const TitleCard = styled.h3`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
`;

export const TitleCardDes = styled.h3`
    flex: auto;
    overflow: hidden;
    color: #535353;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
`;

export const DescriptionStyled = styled(Descriptions)`
    & .ant-descriptions-view {
        border: 1px solid #f0f0f0;
    }
`;

export default GlobalStyle;
