import styled, {keyframes} from 'styled-components';

const BodyDiv = styled.div`
	order: 1;
	position: relative;
	top: 85px;
	margin: 0 auto;
	height: calc(100vh - 102px);
	width: calc(100% - 40px);
	min-width: 485px;
	text-align: center;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
`;

export default BodyDiv;