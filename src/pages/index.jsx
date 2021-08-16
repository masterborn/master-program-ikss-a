import PrimaryLogo from '@root/components/logos/PrimaryLogo';
import LogoNoBackground from '@root/components/logos/LogoNoBackground';
import LogoBackground from '@root/components/logos/LogoBackground';
import { H1, BodyText } from '@root/components/typography/Typography';
import { getColor } from '@root/styles/utils';
import TopSection from '@root/components/TopSection/TopSection';


const Home = () => (
  <div>
    <PrimaryLogo margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoNoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <H1 color={getColor('steel')} margin="20px 0 0 40px">
      Example h1 with adjusted color and margin
    </H1>
    <BodyText>Basic body text</BodyText>
    <TopSection title="Przykładowy nagłówek IKSS" text="Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate. "/>
    
  </div>
  
     
);

export default Home;
