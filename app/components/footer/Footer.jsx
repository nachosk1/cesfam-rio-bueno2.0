import Container from '../utils/Container';
import Logo from '../utils/Logo';
import Social from './Social';
import CopyRight from './CopyRight';
import { footerLinks } from '../../../constant';
import ListFooter from './ListFooter';

export default function Footer() {
    return (
        <footer className="bg-white text-black border-t relative z-30">
            <Container>
                <div className="flex flex-col xl:flex-row justify-between py-10 gap-8 xl:gap-24 px-4">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <Logo width={126} height={106} />
                        <div className="hidden xl:block mt-10 w-full">
                            <Social />
                        </div>
                    </div>
                    <ListFooter footerLinks={footerLinks} />
                </div>

                <div className="xl:hidden">
                    <Social />
                </div>
            </Container>

            <CopyRight />
        </footer>
    );
}
