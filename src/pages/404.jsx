import { Wrapper, ImageWrapper, StyledHeader, Description, Button } from '@root/components/404/404.styles';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import errorPage from '../components/icons/svgs/errorPage.svg';

const NotFound = () => (
    <Wrapper>
        <ImageWrapper>
            <Image src={errorPage.src} alt="404-icon" width='693' height='348' />
        </ImageWrapper>
        <StyledHeader>ups, 404</StyledHeader>
        <Description>Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia „i-ka-ka-es” zamiast „ikss”.</Description>
        <Link href='/' >
            <Button as='a' >Uciekam stąd</Button>
        </Link>
    </Wrapper >
);


export default NotFound;