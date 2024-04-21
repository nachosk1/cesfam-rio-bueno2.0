import Input from "../utils/Input";
import InputSelect from "../utils/InputSelect";
import InputRut from "./InputRut";

export default function RegisterProfile({
  account,
  setAccount,
  fail,
  setFail,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rut") {
      setAccount({
        ...account,
        user: { ...account?.user, [name]: value },
      });
      if (fail?.user?.[name]) {
        setFail((errors) => ({ ...errors, user: { [name]: "" } }));
      }
    } else {
      setAccount({
        ...account,
        profile: { ...account?.profile, [name]: value },
      });
      if (fail?.profile?.[name]) {
        setFail((errors) => ({ ...errors, profile: { [name]: "" } }));
      }
    }
  };

  return (
    <>
      <div>
        <InputRut
          account={account}
          setAccount={setAccount}
          fail={fail}
          setFail={setFail}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-description">
          Correo Electronico
        </label>
        <Input
          type="email"
          id="email"
          placeholder="Ej: correo@gmail.com"
          autoComplete="email"
          value={account?.profile?.email}
          name="email"
          onChange={handleInputChange}
          error={fail?.profile?.email}
        />
      </div>
      <div>
        <label htmlFor="name" className="text-description">
          Nombre <span className="font-bold">*</span>
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Ej: Juanito Pérez"
          autoComplete="name"
          value={account?.profile?.name}
          name="name"
          onChange={handleInputChange}
          error={fail?.profile?.name}
        />
      </div>
      <div>
        <label htmlFor="lastname" className="text-description">
          Apellido <span className="font-bold">*</span>
        </label>
        <Input
          type="text"
          id="lastname"
          placeholder="Ej: Martínez"
          autoComplete="lastname"
          value={account?.profile?.lastname}
          name="lastname"
          onChange={handleInputChange}
          error={fail?.profile?.lastname}
        />
      </div>
      <div>
        <label htmlFor="birth" className="text-description">
          Fecha de Nacimiento <span className="font-bold">*</span>
        </label>
        <Input
          type="date"
          id="birth"
          autoComplete="birth"
          value={account?.profile?.birth}
          name="birth"
          onChange={handleInputChange}
          error={fail?.profile?.birth}
        />
      </div>
      <div>
        <label htmlFor="sex" className="text-description">
          Sexo <span className="font-bold">*</span>
        </label>
        <InputSelect
          options={["Masculino", "Femenino"]}
          id={"sex"}
          name={"sex"}
          placeholder={"Seleccione sexo"}
          onChange={handleInputChange}
          error={fail?.profile?.sex}
        />
      </div>
      <div>
        <label htmlFor="address" className="text-description">
          Dirección de domicilio <span className="font-bold">*</span>
        </label>
        <Input
          type="text"
          id="address"
          placeholder="Ej: Pedro Lagos 1234"
          autoComplete="address"
          value={account?.profile?.address}
          name="address"
          onChange={handleInputChange}
          error={fail?.profile?.address}
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-description">
          Número de telefono principal <span className="font-bold">*</span>
        </label>
        <Input
          type="number"
          id="phone"
          placeholder="Ej: +56912345678"
          autoComplete="phone"
          value={account?.profile?.phone}
          name="phone"
          onChange={handleInputChange}
          error={fail?.profile?.phone}
        />
      </div>
    </>
  );
}
