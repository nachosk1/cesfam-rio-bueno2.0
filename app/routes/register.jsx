import FormRegister from '../components/register/FormRegister';
import Container from '../components/utils/Container'

export default function Register() {
    return (
        <div className="my-8 md:my-10">
            <Container>
                <h1 className="text-heading mt-4">Crear Mi Cuenta</h1>
                <FormRegister />
            </Container>
        </div>
    );
}
