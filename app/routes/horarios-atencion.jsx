import { clinic } from '../../constant';
import ItemClinic from '../components/hours-of-attention/ItemClinic';
import SectionIcons from '../components/home/SectionIcons';
import Container from '../components/utils/Container';

export default function AttentionHour() {
    return (
        <div className='my-8 md:my-10'>
            <Container>
                <section>
                    <h1 className="text-heading text-center md:text-start">
                        Horario de Atención
                    </h1>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 place-content-center md:place-content-start">
                        {clinic.map(clinic => (
                            <ItemClinic key={clinic.name} item={clinic} />
                        ))}
                    </div>
                </section>
                <section className='mb-4'>
                    <h2 className="text-subtitle mt-8">
                        Horario de Atención de Urgencia
                    </h2>
                    <div className="mt-4 text-description">
                        <p>
                            En caso de emergencia, acuda a nuestro centro de
                            salud más cercano o llame a nuestro número de
                            emergencia. Nuestros profesionales estarán
                            disponibles para atenderlo.
                        </p>
                    </div>
                </section>
                <SectionIcons />
            </Container>
        </div>
    );
}
