import styled, {keyframes} from 'styled-components';

const menuBarAnimation = keyframes`
	0%{
		opacity: 0;
		width: 0px;
		margin-left: 50%;
	}
	100%{
		opacity: 1;
		width: calc(100% - 40px);
		margin-left: 2px;
	}
`;

const MenuBottomBarAnimation = styled.div`
	position: absolute;
	border: 1.5px solid #707090;
	border-radius: 5px;
	width: calc(100% - 40px);
	top: 68px;
	margin-left: 2px;
	opacity: 0;
	animation: ${menuBarAnimation} 0.4s linear 0s 1 forwards;
`;

export default MenuBottomBarAnimation;