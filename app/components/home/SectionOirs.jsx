import Button from '../utils/Button';
import { Link } from '@remix-run/react';
import Picture from '../utils/Picture';

export default function SectionOirs() {
    return (
        <section className="grid md:grid-cols-2 gap-4 mt-10 md:mt-16">
            <div className="order-2 md:order-1 flex flex-col justify-between">
                <div>
                    <h1 className="text-heading">
                        Oficina de Información, Reclamos y Sugerencias (OIRS)
                    </h1>
                    <p className="mb-4 md:mb-6 text-description mt-2 md:mt-4">
                        La Oficina de Información, Reclamos y Sugerencias (OIRS)
                        es tu espacio para compartir feedback. Rellena un
                        formulario para tus quejas o sugerencias y ayúdanos a
                        mejorar nuestros servicios. Estamos comprometidos a
                        escuchar y actuar según tus necesidades.
                    </p>
                </div>
                <div>
                    <Link to="/oirs-info">
                        <Button color="bg-third">Más información</Button>
                    </Link>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <Picture
                    url={'/home/image-oirs.png'}
                    alt="Oficina de Información, Reclamos y Sugerencias"
                    style="w-full"
                />
            </div>
        </section>
    );
}
