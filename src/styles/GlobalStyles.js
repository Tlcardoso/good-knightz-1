import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --text-black: #151812;
    --text-white: #EEE;
    --primary: orange;
    --secondary: #F80;
    --shadow: #808080;
    
    --gray: #404040;
    --black: #212121;
    --black-void: #020202;
    --white: #FFF;
    --pink: #FFADDD;
    --pink-dark: #FF99BE;
    --blue: #82B2FB;
    --purple: #2F1F46;
    --purple-light: #453064;
    --green: #A0E0C5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body #root {
    height: 100%;
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
  }
  @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
      }
  }
  @media(max-width: 768px) {
    html {
        font-size: 87.50%;
    }
  }
`