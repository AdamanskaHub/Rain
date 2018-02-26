import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;
    height: 100%;
    min-height: 100vh;
    padding-bottom: 30px;
    width: 100vw;
    background: linear-gradient(45deg, #ED6886, #C96DD8);
    position: relative;
    font-family: 'Amaranth', Arial, sans-serif;
    z-index:5;
    ${props => props.onlyOne ? `` 
    : null}
`;

export const Background = styled.div`
    background-image: url(${props => props.image});
    background-repeat:repeat;
    height: 100%;
    width: 100vw;
    position: absolute;
    z-index:0;
`;

export const Relative = styled.div`
    position: relative;
`;

export const TopContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    position: relative;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2.3em;
    font-family: 'Amaranth',Arial,sans-serif;
    margin: 0;
    padding: 40px 0px;
    text-align: center;
    max-width: 50vw;
    @media (max-width:700px) {
        max-width: 75vw;
    }
`;

export const DD = styled.div`
    transition: all .3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    position: absolute;
    top: 120px;
    background-color: #fff;
    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.4);
`;

export const Cities = styled.span`
    transition: all .2s ease-in-out;    
    margin: 0;
    padding: 2px 15px;
    &:hover {
        background: linear-gradient(45deg, #ED6886, #C96DD8);
        color: #fff;
        cursor: pointer;
    }
`;

export const LamaContainer = styled.div`
    display:flex;
    transition: all .3s ease-in-out;
    justify-content: center;
    max-width: 80%;
    margin: 30px auto;
    z-index:10;
`;

export const LamaImg = styled.img`
    height: 150px;
    transition: all .3s ease-in-out;
    width: auto;
`;

export const BubbleContainer = styled.div`
    display:flex;
    margin-left: 20px;
    align-items: center;
    max-width: 70%;
    @media (max-width: 700px) {
        margin-left: 5px;
    }
`;

export const Bubble = styled.div`
    transition: all .3s ease-in-out;
    border-radius:20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.4);
`;

export const Speech = styled.p`
    transition: all .3s ease-in-out;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1.7em;
    margin: 0;
    line-height: 1.2;
    text-align: center;
`;

export const BubbleTriangle = styled.img`
    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.4);
    // margin-left: 30%;
    width: 0;
	height: 0;
	border-bottom: 15px solid white;
	border-left: 20px solid transparent;
`;

export const BlockContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    z-index:15;
    @media (max-width: 700px) {
        flex-direction: column;
        width: 90vw;
        align-items: center;
        margin: 0 auto; 
    }
`;

export const Block = styled.div`
    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.4);
    // padding: 10px;
    background-color: #fff;
    width: 30%;
    border-radius: 8px;
    @media (max-width: 700px) {
        width: 80%;
        margin-bottom: 10px;
    }
`;

export const TopBlock = styled.div`
    padding: 10px;
    border-radius: 8px 8px 0 0;
    ${props => props.clouds ? `
    background: linear-gradient(45deg, #E76993, #D8D8D8);
    ` 
    : props.rain ? `
    background: linear-gradient(45deg, #CB6DD2, #50AFED);
    `
    : props.temp ? `
    background: linear-gradient(45deg, #E96990, #EDB51E);
    `
    : null}
`;

export const MiniTitle = styled.h3`
    margin: 0;
    color: #fff;  
`;

export const BottomBlock = styled.div`
    position: relative;
`;

export const MiniImg = styled.img`
    position: absolute;
    right: 10px;
    top: 5px;
    height: 50px;
`;

export const DataText = styled.p`
    margin: 0;
    margin-top: 10px;
    padding: 0 10px;
`;

export const SpeechData = styled.p`
    font-family: 'Gloria Hallelujah', cursive;
    margin: 0;
    padding: 0 10px 10px 10px;
`;




