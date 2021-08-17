import PrimaryLogo from '@root/components/logos/PrimaryLogo';
import LogoNoBackground from '@root/components/logos/LogoNoBackground';
import LogoNoBackgroundWhite from '@root/components/logos/LogoNoBackgroundWhite';
import { H1, BodyText } from '@root/components/typography/Typography';
import { getColor } from '@root/styles/utils';



const Home = () => (
  <div>
    <PrimaryLogo margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoNoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoNoBackgroundWhite margin="20px 0 0 120px" height="49px" width="78px" />
    <H1 color={getColor('steel')} margin="20px 0 0 40px">
      Example h1 with adjusted color and margin
    </H1>
    <BodyText>Basic body text</BodyText>
    
    
  </div>
  
     
);

export default Home;
