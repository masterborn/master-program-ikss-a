import PropTypes, { oneOfType } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TeamWrapper, TeamHeading, TeamDescription } from './TeamSection.styles';

const TeamSection = ({ teamContent: { fields: { text1, title, image1: { fields: { file: { url } } } } } }) => (
    <TeamWrapper>
        <TeamHeading>{title}</TeamHeading>
        <TeamDescription as='div' >{documentToReactComponents(text1)}</TeamDescription>
        <img src={`https:${url}`} alt='team' />
    </TeamWrapper>
);

TeamSection.propTypes = {
    teamContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
}

export default TeamSection

