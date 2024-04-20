import SectionIcons from '../components/home/SectionIcons';
import Container from '../components/utils/Container';
import BannerDefault from '../components/utils/BannerDefault';
import Picture from '../components/utils/Picture';

export default function MissionPage() {
    return (
        <div className="space-y-10 md:space-y-16 pb-10">
            <BannerDefault image="/mission-vision/blur-hospital.jpg">
                <div className="text-center">
                    <div className="md:px-16">
                        <h1 className="text-heading text-center">
                            Nuestra Misión
                        </h1>
                        <div className="text-description my-2 md:my-4">
                            La misión de la atención primaria de salud y
                            hospital de Río Bueno está determinada por el
                            compromiso con la salud de los miembros de la
                            comuna, desde el enfoque en Modelo de Salud Familiar
                            durante todo el ciclo vital, con énfasis en la
                            prevención, promoción, recuperación y rehabilitación
                            de la salud, con pertinencia intercultural,
                            participación social y comunitaria.
                        </div>
                    </div>

                    <div className="mt-8 md:mt-16 md:px-16">
                        <p className="text-subtitle-primary  uppercase">
                            Nuestra Visión
                        </p>
                        <h2 className="text-lg md:text-2xl text-third md:mt-2 font-semibold">
                            Ser lideres en la prestación de servicios de salud
                            otorgando a usuarios de Rio Bueno
                        </h2>
                        <div className="text-description my-2 md:my-4">
                            Nuestro compromiso es asegurar la atención
                            resolutiva, oportuna, integral, equitativa y con
                            altos estándares de calidad, considerando a las
                            personas, familias y su entorno, favoreciendo la
                            participación activa de la comunidad en la
                            construcción de su autocuidado y estilos de vida
                            saludable.
                        </div>
                    </div>

                    <div className="mt-8 md:mt-16 bg-slate-200 grid md:grid-cols-[40%_auto] gap-4 md:gap-8 text-start p-4 md:p-6 rounded-md">
                        <Picture
                            url={'/mission-vision/values.jpg'}
                            alt="imagen nuestros valores"
                            style="md:aspect-square object-contain md:object-cover rounded-md h-full w-full"
                        />
                        <div>
                            <div className="md:order-1">
                                <p className="uppercase text-subtitle-primary ">
                                    Nuestros Valores
                                </p>
                                <h2 className="text-lg md:text-2xl text-third md:mt-2 font-semibold">
                                    Ser lideres en la prestación de servicios de
                                    salud otorgando a usuarios de Rio Bueno
                                </h2>
                            </div>
                            <div className="text-description my-2 md:my-4 md:order-2">
                                Motivación y compromiso como elementos
                                movilizadores de los usuarios internos para el
                                logro de los objetivos sanitarios, y con ello
                                contribuir a mejorar la salud de la población y
                                la satisfacción usuaria. Equidad como principio
                                orientador de hacerse cargo de las diferencias
                                injustas y evitables de la población a cargo.
                                Calidad garantizando a los usuarios una atención
                                basada en procesos de mejora continua y en la
                                seguridad asistencial en post de la satisfacción
                                usuaria.
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-16 bg-slate-200 grid md:grid-cols-[auto_40%] gap-4 md:gap-8 text-start p-6 rounded-md">
                        <Picture
                            url={'/mission-vision/image-culture.jpg'}
                            alt="imagen nuestros valores"
                            style="md:aspect-square object-contain md:object-cover rounded-md h-full w-full"
                        />
                        <div className="md:order-first">
                            <p className="uppercase text-subtitle-primary ">
                                Nuestra Cultura
                            </p>
                            <h2 className="text-lg md:text-2xl text-third md:mt-2 font-semibold">
                                Ser lideres en la prestación de servicios de
                                salud otorgando a usuarios de Rio Bueno
                            </h2>
                            <div className="text-description my-2 md:my-4">
                                Nuestra cultura organizacional de mejora
                                continua que considera una responsabilidad
                                compartida y una aspiración colectiva. Todos los
                                miembros de la organización están comprometidos
                                con la búsqueda constante de la excelencia y la
                                innovación, La formación y el desarrollo
                                profesional son componentes esenciales de esta
                                cultura, la capacitación constante de los
                                empleados para que adquieran nuevas habilidades
                                y conocimientos que les permitan contribuir de
                                manera más significativa a los objetivos de
                                mejora. La innovación se valora y se celebra,
                                incentivando la creatividad y el pensamiento
                                disruptivo.
                            </div>
                        </div>
                    </div>
                </div>
            </BannerDefault>
            <Container>
                <SectionIcons />
            </Container>
        </div>
    );
}
