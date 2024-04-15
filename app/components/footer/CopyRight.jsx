import Container from "../utils/Container";

export default function CopyRight() {
  return (
    <section className="bg-third text-white py-6 text-center md:text-start">
      <Container>
        &copy; {new Date().getFullYear()} Todos los derechos
        reservados.{" "} Cesfam Río Bueno, Chile.
      </Container>
    </section>
  );
}
