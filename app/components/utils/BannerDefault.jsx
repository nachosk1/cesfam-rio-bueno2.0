import Logo from "./Logo";

export default function BannerDefault({ children, image }) {
  return (
    <section>
      <div
        className="bg-center bg-cover bg-[url('/blur-hospital.jpg')] bg-fixed bg-no-repeat bg-gray-300 bg-blend-multiply h-96 py-48"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container max-w-5xl mx-auto -mt-72 ">
        <div className="px-2 md:px-6 bg-white pt-10 mx-4 rounded-xl">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="mt-10 md:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
