import Image from "next/image";

export default function SectionIcons() {
  return (
    <div className="grid grid-cols-3 gap-y-4 place-items-center mt-10 md:mt-16">
      <div>
        <Image
          src={"/logo-accredited.jpg"}
          width={500}
          height={500}
          alt="Logo acreditado"
          className="w-24 md:w-40"
        />
      </div>
      <div>
        <Image
          src={"/logo-muni.png"}
          width={500}
          height={500}
          alt="Logo acreditado"
          className="w-24 md:w-40"
        />
      </div>
      <div>
        <Image
          src={"/logo-centro-de-salud.jpg"}
          width={500}
          height={500}
          alt="Logo acreditado"
          className="w-24 md:w-40"
        />
      </div>
    </div>
  );
}
