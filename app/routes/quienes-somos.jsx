import History from '../components/about-us/History';
import OurTeam from '../components/about-us/OurTeam';
import Community from '../components/about-us/Community';
import Picture from '../components/utils/Picture';

export default function About() {
    return (
        <div>
            <div className="fixed w-full z-[25] h-[30vh] md:h-[40vh]">
                <Picture
                    url="https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842499/oleodinamica/banner_about_us_c2bb253364.webp"
                    alt="Banner Quienes Somos"
                    style="w-full h-full object-cover object-center"
                />
                <div className="w-full  h-[30vh] md:h-[40vh] bg-opacity-30 bg-black absolute top-0" />
            </div>
            <div className=" h-[30vh] md:h-[40vh] relative z-10"></div>
            <div className="relative z-[26] bg-white pt-8">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="flex flex-col gap-y-8">
                        <section>
                            <h1 className="text-heading">Quienes Somos</h1>
                            <div className="mt-2 md:mt-6">
                                <History />
                            </div>
                        </section>
                    </div>
                </div>
                <section className="bg-slate-200 py-8 my-10 md:my-16">
                    <div className="container max-w-5xl mx-auto px-4">
                        <h1 className="text-heading">Nuestro Equipo</h1>
                        <div className="mt-2 md:mt-6 grid md:grid-cols-2 gap-6">
                            <div>
                                <Picture
                                    url="https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842497/oleodinamica/team_ca0aa8020a.webp"
                                    alt="Imagen Nuestro Equipo"
                                    style="object-contain w-full h-full"
                                />
                            </div>
                            <div>
                                <OurTeam />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container max-w-5xl mx-auto px-4">
                    <section>
                        <h1 className="text-heading">
                            Compromiso con la Comunidad
                        </h1>
                        <div className="mt-2 md:mt-6">
                            <Community />
                            <div>
                                <Picture
                                    url="https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842501/oleodinamica/community_3ee5e39c8b.webp"
                                    alt="Imagen Compromiso con la Comunidad"
                                    style="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
