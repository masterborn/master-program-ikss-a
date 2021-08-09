import PrimaryLogo from '@root/components/logos/PrimaryLogo';
import LogoNoBackground from '@root/components/logos/LogoNoBackground';
import LogoBackground from '@root/components/logos/LogoBackground';
import styled from 'styled-components';
import { getColor } from '@root/styles/utils';

// just to show theme usage - should be deleted
const ExampleText = styled.p`
  color: ${getColor('steel')};
`;

const Home = () => (
  <div>
    <PrimaryLogo margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoNoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <ExampleText>Example text with color got from theme (function in utils file)</ExampleText>
  </div>
);

export default Home;
