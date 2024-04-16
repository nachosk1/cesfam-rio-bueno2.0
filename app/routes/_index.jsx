import { ClientOnly } from 'remix-utils/client-only';
import Banner from '../components/home/Banner';
import Spinner from '../components/utils/Spinner';
import DeptSummary from '../components/home/DeptSummary';
import Container from '../components/utils/Container';
import BottomBorder from '../components/home/BottomBorder';

export const meta = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ];
};

export default function Index() {
    return (
        <div>
            <ClientOnly fallback={<Spinner />}>{() => <Banner />}</ClientOnly>
            <div className="bg-slate-200 pt-10 md:pt-16 pb-10">
                <Container>
                    <ClientOnly fallback={<Spinner />}>
                        {() => <DeptSummary />}
                    </ClientOnly>
                </Container>
            </div>
            <BottomBorder />
        </div>
    );
}
