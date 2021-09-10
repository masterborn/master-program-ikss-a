import PropTypes, { oneOfType } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import MemberTile from './MemberTile';
import {
  SectionWrapper,
  StyledHeader,
  StyledBodyText,
  TextSection,
  TilesWrapper,
} from './ManagementSection.styles';

const ManagementSection = ({ boardMembers, boardMembersText }) => {
  const sortedBoardMembers = [...boardMembers].sort(compareProjectsOrder);
  const sectionTitle = boardMembersText.title;
  const sectionDescription = documentToReactComponents(boardMembersText.text1);
  return (
    <SectionWrapper>
      <TextSection>
        <StyledHeader>{sectionTitle}</StyledHeader>
        <StyledBodyText>{sectionDescription}</StyledBodyText>
      </TextSection>
      <TilesWrapper>
        {sortedBoardMembers.map((member) => (
          <MemberTile key={member.fields.name} memberInfo={member.fields} />
        ))}
      </TilesWrapper>
    </SectionWrapper>
  );
};

ManagementSection.propTypes = {
  boardMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  boardMembersText: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default ManagementSection;
