import styled, {keyframes} from 'styled-components';

const ProjectPictureDiv = styled.div`
    order: 0;
    position: relative;
    width: calc(${(props) => `${(props.width * 3) / 4}`}px + ${(props) => `${props.width / 32}`}vw);
    height: calc(${(props) => `${(props.height * 3) / 4}`}px + ${(props) => `${props.height / 32}`}vw);
    background-image: url(${(props) =>  `${'https://cdn.rawgit.com/NumaKarolinski/PersonalWebsite/websiteVersion1.2/src/SourceImages/' + props.fileName}`});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px;
`;

export default ProjectPictureDiv;