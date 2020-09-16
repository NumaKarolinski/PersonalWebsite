import styled, {keyframes} from 'styled-components';

const ProjectPictureDiv = styled.div`
    order: 0;
    position: relative;
    width: ${(props) => `${props.width}`}px;
    height: ${(props) => `${props.height}`}px;
    background-image: url(${(props) =>  `${'https://cdn.rawgit.com/NumaKarolinski/PersonalWebsite/websiteVersion1.2/src/SourceImages/' + props.fileName}`});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px;
`;

export default ProjectPictureDiv;