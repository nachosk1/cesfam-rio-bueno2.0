import { Link } from '@remix-run/react';
import Container from '../components/utils/Container';
import Button from '../components/utils/Button';
import Map from '../components/utils/Map';
import MobilePharmacy from '../components/our-dependencies/MobilePharmacy';
import ItemClinic from '../components/our-dependencies/ItemClinic';
import { clinic } from '../../constant';

export default function OurDependencies() {
    return (
        <div className="my-8 md:my-10">
            <Container>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                        <h1 className="text-heading">
                            Nuestros Centros de Salud
                        </h1>
                        <div className="mt-2 md:mt-6 text-description">
                            <p>
                                El Departamento de Salud de Río Bueno es una
                                institución vital para nuestra comunidad.
                                Nuestro enfoque se centra en la atención
                                primaria de salud, promoviendo la prevención y
                                el cuidado integral. Los Centros de Salud
                                Familiar (CESFAM) son nuestros pilares, donde un
                                equipo de profesionales atiende a las familias
                                durante todas las etapas de la vida. Valoramos
                                la participación comunitaria y trabajamos juntos
                                para mejorar la calidad de vida de todos. 🌿🏥
                            </p>
                            <h2 className="text-subtitle mt-4">
                                Descubre cómo la Atención primaria de Salud
                                mejora tu bienestar
                            </h2>
                            <div className="mt-4">
                                <Link to={'/carta-de-prestaciones'}>
                                    <Button>Prestaciones</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Map
                        location={
                            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.549807702748!2d-72.95750878753297!3d-40.33014787133468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961643692c15c057%3A0x452cfd8f7d1cfb1e!2sDepartamento%20de%20Salud%20Rio%20Bueno!5e0!3m2!1ses!2scl!4v1707243076334!5m2!1ses!2scl'
                        }
                    />
                </div>
            </Container>

            <div className="bg-slate-100 pb-8 pt-6 mt-8 w-full">
                <Container>
                    <section>
                        <MobilePharmacy />
                    </section>
                    <section className="flex flex-col gap-8 mt-10">
                        {clinic.map(item => (
                            <ItemClinic key={item.name} item={item} />
                        ))}
                    </section>
                </Container>
            </div>
        </div>
    );
}
