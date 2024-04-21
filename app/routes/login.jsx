import FormLogin from '../components/login/FormLogin'
import Container from '../components/utils/Container'
import Picture from '../components/utils/Picture'

export default function Login() {
  return (
    <div className='my-8 md:my-10'>
      <Container>
        <div className="grid md:grid-cols-2 gap-2 md:gap-8 items-center">
            <Picture 
                url={"/posta/cesfam-rio-bueno.webp"}
                alt='Cesfam Rio Bueno'
                style="w-full h-full object-cover rounded"
            />
          <div>
            <h1 className="text-heading">Iniciar Sesión</h1>
            <div className="max-w-xl">
              <FormLogin />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
