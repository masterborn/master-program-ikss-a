import { useState } from 'react';
import Image from 'next/image';
import PropTypes, { oneOfType } from 'prop-types';
import arrowIcon from '../../../icons/svgs/grey-down-arrow.svg';
import phoneIcon from '../../../icons/svgs/blue-phone-icon.svg';
import emailIcon from '../../../icons/svgs/email-blue-icon.svg';
import linkedinIcon from '../../../icons/svgs/linkedin-dark-icon.svg';
import {
  TileContainer,
  ImageWrapper,
  ImagePlaceholder,
  NameWithRole,
  MemberName,
  MemberRole,
  ArrowButton,
  AdditionalInfo,
  Phone,
  PhoneNumber,
  Email,
  MembersEmail,
  StyledLinkedinButton,
  StyledLink,
  ContactPlaceholder,
  RolePlaceholder,
  ButtonPlaceholder,
} from './MemberTile.styles';

const MemberTile = ({ memberInfo }) => {
  const [isTileOpen, setIsTileOpen] = useState(false);
  const nameSplitted = memberInfo.name.split(' ');

  const handleTile = () => {
    setIsTileOpen(!isTileOpen);
  };

  return (
    <TileContainer
      className={isTileOpen ? 'opened' : 'closed'}
      onClick={!isTileOpen ? handleTile : undefined}
    >
      {memberInfo.image ? (
        <ImageWrapper isTileOpen={isTileOpen}>
          <Image
            src={`https:${memberInfo.image.fields.file.url}`}
            layout="fill"
            alt="Member photo"
          />
        </ImageWrapper>
      ) : (
        <ImagePlaceholder isTileOpen={isTileOpen} />
      )}
      <NameWithRole isTileOpen={isTileOpen}>
        <MemberName isTileOpen={isTileOpen}>
          {nameSplitted.map((word) => (
            <p key={word}>{word}</p>
          ))}
        </MemberName>
        {memberInfo.role ? <MemberRole>{memberInfo.role}</MemberRole> : <RolePlaceholder />}
      </NameWithRole>
      <AdditionalInfo isTileOpen={isTileOpen}>
        {memberInfo.phone ? (
          <Phone>
            <Image src={phoneIcon} alt="Phone" />
            <PhoneNumber href={`tel:${memberInfo.phone}`}>{memberInfo.phone}</PhoneNumber>
          </Phone>
        ) : (
          <ContactPlaceholder />
        )}
        {memberInfo.email ? (
          <Email>
            <Image src={emailIcon} alt="Mail" />
            <MembersEmail href={`mailto: ${memberInfo.email}`}>{memberInfo.email}</MembersEmail>
          </Email>
        ) : (
          <ContactPlaceholder />
        )}
        {memberInfo.linkedinUrl ? (
          <StyledLink href={memberInfo.linkedinUrl}>
            <StyledLinkedinButton icon>
              <Image src={linkedinIcon} alt="LinkedIn" />
              <p>LinkedIn</p>
            </StyledLinkedinButton>
          </StyledLink>
        ) : (
          <ButtonPlaceholder />
        )}
      </AdditionalInfo>
      <ArrowButton onClick={handleTile} className={isTileOpen ? 'opened' : 'closed'}>
        <Image src={arrowIcon} />
      </ArrowButton>
    </TileContainer>
  );
};

MemberTile.propTypes = {
  memberInfo: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]))
    .isRequired,
};

export default MemberTile;
