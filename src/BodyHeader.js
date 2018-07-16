import styled, {keyframes} from 'styled-components';

const rotateOut = keyframes`
	0%{
		transform: rotateY(0deg) rotateX(0deg);
	}
	100%{
		transform: rotateY(-90deg) rotateX(-5deg);
	}	
`;

const rotateIn = keyframes`
	0%{
		transform: rotateY(90deg) rotateX(0deg);
	}
	100%{
		transform: rotateY(0deg) rotateX(5deg);
	}
`;

const BodyHeader = styled.header`
	order: 0;
	perspective: 200px;
	display: inline-block;
	position: relative;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2em;
	height: 1em;
	color: #503070;
	transform: rotateY(90deg) rotateX(0deg);
	margin: 25px auto 20px auto;
	transform-origin: left;
	animation: ${rotateIn} 0.75s cubic-bezier(0, 0, 0.49, 1.8) 0.25s 1 forwards;

	&.buttonClicked{
		transform: rotateY(0deg) rotateX(0deg);
		animation: ${rotateOut} 0.6s ease-in-out 0.1s 1 forwards;
	}
`;

export default BodyHeader;