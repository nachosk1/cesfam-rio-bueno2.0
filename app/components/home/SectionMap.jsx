import Map from "../Map";

export default function SectionMap() {
  return (
    <section className="mt-10 md:mt-16 mb-10">
      <div className="flex gap-2 items-center justify-center mb-4 md:mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-geo-alt-fill fill-third w-5 h-5 md:w-8 md:h-8"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
        <h2 className="text-heading">Nuestra ubicación</h2>
      </div>
      <Map
        location={
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6004.968395763407!2d-72.95104965324636!3d-40.33629450140093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96164273760ef63f%3A0x244d7643cd08e3ba!2sCesfam%20R%C3%ADo%20Bueno!5e0!3m2!1ses-419!2scl!4v1707396618964!5m2!1ses-419!2scl"
        }
      />
    </section>
  );
}
