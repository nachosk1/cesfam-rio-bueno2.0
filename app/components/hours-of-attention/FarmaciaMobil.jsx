import Image from "next/image";
import React from "react";

export default function FarmaciaMobil() {
  return (
    <div>
      <h2 className="text-heading text-xl md:text-2xl lg:text-3xl font-bold text-center my-4">
        Farmacia Móvil
      </h2>
      <div className="">
        {/* Contenedor de imágenes */}
        <div className="flex justify-between gap-8">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/posta/farmacia-movil.jpeg"
              alt="Farmacia móvil"
              layout="fill"
              objectFit="cover"
              className="transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/posta/farmacia-movil-3.jpeg"
              alt="Otra vista de la farmacia móvil"
              layout="fill"
              objectFit="cover"
              className="transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
        {/* Contenedor de texto */}
        <div className="my-6">
          <p className="text-description text-center">
            "La farmacia móvil de Río Bueno abrió sus puertas a fines del año
            2019, desde ese tiempo hasta el día de hoy a entregado su servicio
            como una FARMACIA COMUNAL, beneficiando a todos los habitantes de la
            comuna de Río Bueno, independiente del sistema de salud, y así
            puedan adquirir su tratamiento médico a un precio justo. Esta
            farmacia está dirigida a los usuarios de tratamientos de
            enfermedades crónicas y para acceder debe realizarse una previa
            inscripción donde deberán presentar su cédula de identidad y
            comprobante de domicilio, toda venta debe ser con receta médica
            actualizada. 🚑"
          </p>
        </div>
      </div>
    </div>
  );
}
