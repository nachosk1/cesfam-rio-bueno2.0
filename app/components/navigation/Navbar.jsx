import { navLinks } from '../../../constant';
import Container from '../utils/Container';
import Header from './Header';
import NavLink from './NavLink';
import SectionButtons from './SectionButtons';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 z-40 w-full">
            <Container>
                <Header />
            </Container>
            <div className="bg-third py-4">
                <Container>
                    <div className="flex items-center md:justify-between">
                        <div className="hidden md:block">
                            <ul className=" text-gray-200 hidden md:grid md:grid-cols-3 md:gap-y-4 lg:grid-cols-4 lg:space-x-4 xl:flex xl:gap-x-8 xl:space-x-0 font-semibold flex-1">
                                {navLinks.map(link => (
                                    <NavLink key={link.title} link={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            <SectionButtons />
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    );
}
