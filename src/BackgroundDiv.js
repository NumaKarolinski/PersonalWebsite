import styled, {keyframes} from 'styled-components';

const BackgroundDiv = styled.div`
	height: 100vh;
	width: 100vw;
    min-width: 465.94px;
	display: flex;
	flex-direction: column;
	position: relative;
	user-select: none;
	overflow: hidden;
	background: ${(props) => `radial-gradient(ellipse at ${props.xLeftPercent + '%'} ${props.yLeftPercent + '%'}, rgba(225, 225, 225, 0.7), transparent),
            		radial-gradient(ellipse at ${props.xRightPercent + '%'} ${props.yRightPercent + '%'}, rgba(100, 100, 100, 0.7), transparent)`};
`;

export default BackgroundDiv;