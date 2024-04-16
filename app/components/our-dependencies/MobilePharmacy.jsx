import Picture from '../utils/Picture';

export default function MobilePharmacy() {
    return (
        <div>
            <h2 className="text-heading text-xl md:text-2xl lg:text-3xl font-bold text-center my-4">
                Farmacia Móvil
            </h2>
            <div>
                <div className="flex justify-between gap-8">
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Picture
                            url="/posta/farmacia-movil.jpeg"
                            alt="Farmacia móvil"
                            style="transition duration-500 ease-in-out transform hover:scale-110 h-full lg:h-[400px] w-full"
                        />
                    </div>
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Picture
                            url="/posta/farmacia-movil-3.jpeg"
                            alt="Farmacia móvil"
                            style="transition duration-500 ease-in-out transform hover:scale-110 h-full lg:h-[400px] w-full"
                        />
                    </div>
                </div>
                <div className="my-6">
                    <p className="text-description text-center">
                        "La farmacia móvil de Río Bueno abrió sus puertas a
                        fines del año 2019, desde ese tiempo hasta el día de hoy
                        a entregado su servicio como una FARMACIA COMUNAL,
                        beneficiando a todos los habitantes de la comuna de Río
                        Bueno, independiente del sistema de salud, y así puedan
                        adquirir su tratamiento médico a un precio justo. Esta
                        farmacia está dirigida a los usuarios de tratamientos de
                        enfermedades crónicas y para acceder debe realizarse una
                        previa inscripción donde deberán presentar su cédula de
                        identidad y comprobante de domicilio, toda venta debe
                        ser con receta médica actualizada. 🚑"
                    </p>
                </div>
            </div>
        </div>
    );
}
