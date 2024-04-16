import { news } from '../../constant';
import ListNews from '../components/news-events/ListNews';
import Container from '../components/utils/Container';

export default function NewsPage() {
    return (
        <div className="mt-8 md:mt-10">
            <Container>
                <section>
                    <h1 className="text-heading">Noticias</h1>
                    <p className="line-clamp-4 lg:mt-2">
                        Últimas novedades sobre salud, bienestar y eventos
                        relacionados con el ámbito médico. Mantente informado
                        sobre temas relevantes que afectan a nuestra comunidad.
                        Recuerda que la salud es un aspecto fundamental de
                        nuestras vidas, y estar informado nos permite tomar
                        decisiones más concientes y cuidar de nosotros mismos y
                        nuestros seres queridos.{' '}
                    </p>
                    <ListNews newsList={news} />
                </section>
            </Container>

            <section className="mt-8 pb-8 bg-slate-100">
                <Container>
                    <h1 className="text-heading text-center pt-8">
                        Eventos y Novedades
                    </h1>
                    <div className="mt-3 max-w-[550px] mx-auto">
                        <p className="text-center">
                            Descrubre las últimas novedades y eventos relevantes
                            relacionadas con el Centro de salud Familiar
                            (CESFAM) de Río Bueno.
                        </p>
                    </div>
                    <div className="border border-gray-300 p-5 rounded flex items-center justify-center my-4 bg-gray-100 h-80">
                        <p className="text-lg text-gray-500 text-center">
                            No hay noticias disponibles de Facebook
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
