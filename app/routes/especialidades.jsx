import SectionMap from '../components/home/SectionMap';
import ListMoreSpecialties from '../components/specialties/ListMoreSpecialties';
import ListSpecialties from '../components/specialties/ListSpecialties';
import Container from '../components/utils/Container';

export default function Specialties() {
    return (
        <div className="my-8 md:my-10">
            <Container>
                <h1 className="text-heading">Especialidades</h1>
                <p className="text-gray-600 mt-2">
                    Nuestro centro de salud ofrece una amplia gama de
                    especialidades médicas para cubrir todas tus necesidades de
                    atención. Contamos con un equipo de profesionales altamente
                    cualificados en distintas áreas, desde la pediatría hasta la
                    geriatría, asegurando un cuidado integral para ti y tu
                    familia. Explora nuestras especialidades y encuentra la
                    atención experta que mereces.
                </p>

                <ListSpecialties />

                <ListMoreSpecialties />

                <SectionMap />
            </Container>
        </div>
    );
}
