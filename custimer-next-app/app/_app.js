import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body{
        padding: 0;
        margin: 0;
        font-familt: 'Roboto', sans-serif;
    }
`;

export default function App({Component, pageProp}){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProp}/>
        </>
    )
}