import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(45deg, #ED6886, #C96DD8);
    position: relative;
    top: -30px;
    font-family: 'Amaranth', Arial, sans-serif;
    ${props => props.onlyOne ? `` 
    : null}
`;

export const Background = styled.div`
    background-image: url(${props => props.image});
    background-repeat:repeat;
    height: 100vh;
    width: 100vw;
    position: absolute;
`;

export const TopContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2em;
    font-family: 'Amaranth', Arial, sans-serif;
`;

export const LamaContainer = styled.div`
    display:flex;
    justify-content: center;
    max-width: 80%;
    margin: 30px auto;
`;

export const LamaImg = styled.img`
    height: 150px;
    width: auto;
`;

export const BubbleContainer = styled.div`
    display:flex;
    margin-left: 20px;
    align-items: center;
`;

export const Bubble = styled.div`
    border-radius:20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 1px 0px rgba(0,0,0,0.4);
`;

export const Speech = styled.p`
    font-family: 'Gloria Hallelujah', cursive;
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
    justify-content: center;
`;

export const Block = styled.div`
    display: flex;
    justify-content: center;
    height: 20vh;
    width: 30vw;
    background-color: white;
    margin: 10px;
`;

export const TopBlock = styled.div`
`;

export const MiniTitle = styled.h3`

`;

export const BottomBlock = styled.div`
    
`;

export const MiniImg = styled.img`
    
`;

export const DataText = styled.p`
    
`;

export const SpeechData = styled.p`
    font-family: 'Gloria Hallelujah', cursive;
`;



