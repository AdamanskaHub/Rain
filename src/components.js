import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(45deg, #ED6886, #C96DD8);
    // box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.4);
    
    ${props => props.onlyOne ? `` 
    : null}
`;

export const Background = styled.div`
    background-image: url(${''});  
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
    
`;

export const LamaImg = styled.img`

`;

export const Bubble = styled.div`
    
`;

export const Speech = styled.p`
    font-family: 'Gloria Hallelujah', cursive;
`;

export const BubbleTriangle = styled.img`
    
`;

export const BlockContainer = styled.div`
    
`;

export const Block = styled.div`
    
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



