import styled, {keyframes} from 'styled-components';

const ProjectDescriptionDiv = styled.div`
    order: 1;
    position: relative;
    display: table;
    width: calc(${(props) => `${(props.width * 3) / 4}`}px + ${(props) => `${props.width / 32}`}vw);
    max-height: calc(${(props) => `${(props.height * 5) / 8}`}px + ${(props) => `${props.height / 32}`}vw);
`;

export default ProjectDescriptionDiv;