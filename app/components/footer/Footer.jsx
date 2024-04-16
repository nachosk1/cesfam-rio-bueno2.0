import { footerLinks } from '../../../constant';
import Container from '../utils/Container';
import ListFooter from './ListFooter';
import CopyRight from './CopyRight';
import Logo from '../utils/Logo';
import Social from './Social';

export default function Footer() {
    return (
        <footer className="bg-white text-black border-t relative z-30">
            <Container>
                <div className='mb-10'>
                    <div className="flex flex-col xl:flex-row justify-between py-10 gap-8 xl:gap-24 px-4">
                        <div className="flex flex-col justify-start items-start gap-6">
                            <Logo type="large" />
                            <div className="hidden xl:block w-full">
                                <Social />
                            </div>
                        </div>
                        <ListFooter footerLinks={footerLinks} />
                    </div>

                    <div className="xl:hidden h-4">
                        <Social />
                    </div>
                </div>
            </Container>

            <CopyRight />
        </footer>
    );
}
