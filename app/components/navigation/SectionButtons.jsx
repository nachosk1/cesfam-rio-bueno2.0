import { Link } from "@remix-run/react";
import Button from "../utils/Button";

export default function SectionButtons() {
  let number = false

  if (number)
    return (
      <div className="flex space-x-4 justify-center items-center md:flex-col md:gap-y-4 xl:flex-row">
        <div className="bg-slate-400 size-10 px-[3.8rem] rounded animate-pulse">

        </div>
        <div className="bg-slate-400 size-10 px-[3.8rem] rounded animate-pulse">

        </div>
      </div>
    );

  if (number) {
    return (
      <div className="flex space-x-4 justify-center items-center md:flex-col md:gap-y-4 xl:flex-row">
        <Link href="/solicitar-hora">
          <Button color="bg-white" textColor="text-primary">
            Solicitar hora
          </Button>
        </Link>
        <Button
          color="bg-red-200"
          textColor="text-red-700"
          type="button"
        >
          Cerrar Sesión
        </Button>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 justify-center items-center md:flex-col md:gap-y-4 md:items-end xl:flex-row">
      <Link href="/login">
        <Button>Iniciar Sesión</Button>
      </Link>
      <Link href="/register">
        <Button color="bg-white" textColor="text-primary">
          Registrarme
        </Button>
      </Link>
    </div>
  );
}
