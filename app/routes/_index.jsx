import { ClientOnly } from 'remix-utils/client-only';
import Banner from '../components/home/Banner';
import Spinner from '../components/utils/Spinner';
import DeptSummary from '../components/home/DeptSummary';
import Container from '../components/utils/Container';
import BottomBorder from '../components/home/BottomBorder';
import SectionHere from '../components/home/SectionHere';
import SectionQuestion from '../components/home/SectionQuestion';
import SectionOirs from '../components/home/SectionOirs';
import SectionIcons from '../components/home/SectionIcons';
import SectionMap from '../components/home/SectionMap';

export const meta = () => {
    return [
        { title: 'Cesfam Río Bueno - Atención y Servicios de Salud' },
        {
            name: 'description',
            content:
                'Encuentra atención de calidad en Cesfam Río Bueno. Solicita horas, regístrate, consulta las últimas noticias y envía tu opinión sobre nuestros servicios de salud. Tu bienestar es nuestra prioridad.',
        },
    ];
};

export default function Index() {
    return (
        <div>
            <ClientOnly fallback={<Spinner />}>{() => <Banner />}</ClientOnly>
            <div className="bg-slate-200 pt-10 md:pt-14 pb-10">
                <Container>
                    <ClientOnly fallback={<Spinner />}>
                        {() => <DeptSummary />}
                    </ClientOnly>
                </Container>
            </div>
            <BottomBorder />

            <Container>
                <div className='space-y-8 md:space-y-10 mb-8 md:pb-8'>
                    <SectionHere />
                    <hr />
                    <div>
                        <SectionQuestion />
                    </div>
                    <hr />
                    {/* <SectionNews /> */}
                    <SectionOirs />
                    <hr />
                    <SectionIcons />
                    <hr />
                    <SectionMap />
                </div>
            </Container>
        </div>
    );
}
