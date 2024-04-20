import SectionContact from '../components/contact/SectionContact';
import Picture from '../components/utils/Picture';
import SectionQuestion from '../components/home/SectionQuestion';
import SectionMap from '../components/home/SectionMap';
import Container from '../components/utils/Container';

export default function Contact() {
    return (
        <div className="my-8 md:my-10">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-heading px-4 lg:px-0">Contacto</h1>
                <div className="relative">
                    <p className="text-description mt-1 px-4 lg:px-0">
                        ¿Tienes preguntas? Descubre nuestros canales de
                        comunicación.
                    </p>
                    <div className="lg:absolute right-0 top-0">
                        <Picture
                            url={'/contact/contact.webp'}
                            alt="imagen contacto"
                            style="object-cover w-[500px]"
                        />
                    </div>
                    <SectionContact />
                </div>
                <hr className="lg:mt-32" />
            </section>
            <Container>
                <div className="mt-8 lg:mt-10 space-y-8">
                    <SectionQuestion />
                    <SectionMap />
                </div>
            </Container>
        </div>
    );
}
