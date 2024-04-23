import { Link } from '@remix-run/react';
import Button from '../utils/Button';
import Picture from '../utils/Picture';

export default function SectionHere() {
    return (
        <section className="max-w-5xl mx-auto xl:-mt-16">
            <div className="grid md:grid-cols-2">
                <div className="hidden md:block">
                    <ImageHere />
                </div>
                <div className="flex items-center flex-col justify-center text-center gap-6">
                    <h1 className="text-heading">
                        ¿Necesitas descubrir donde ir?
                    </h1>
                    <div className="md:hidden -mt-8">
                        <ImageHere />
                    </div>
                    <p className="text-subtitle">
                        Descubre nuestras sedes de salud.
                    </p>
                    <Link to={'/nuestras-dependencias'} className="rounded">
                        <Button>Explorar aquí</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function ImageHere() {
    return (
        <div className="flex justify-center">
            <Picture
                url={'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842873/oleodinamica/image_here_e68c100c04.webp'}
                alt="Imagen donde quieres ir"
                style="w-[300px] sm:w-[400px] xl:w-full"
            />
        </div>
    );
}
