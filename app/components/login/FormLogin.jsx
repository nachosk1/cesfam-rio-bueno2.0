import { useEffect, useState } from 'react';
import InputRutLogin from './InputRutLogin';
import Input from '../utils/Input';
import Button from '../utils/Button';
import { validateRut } from '../../../utils/rut';

export default function FormLogin() {
    const [forgotPassword, setForgotPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        user: {
            rut: '',
            password: '',
        },
        error: {
            rut: '',
            password: '',
        },
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            user: { ...prevCredentials.user, [name]: value },
        }));
        if (credentials?.error?.[name]) {
            setCredentials({ ...credentials, error: { [name]: '' } });
        }
    };

    useEffect(() => {
        console.log(credentials);
    }, [credentials]);

    const validateForm = () => {
        for (const key in credentials.user) {
            if (credentials?.user?.[key].trim() === '') {
                setCredentials({
                    ...credentials,
                    error: { [key]: 'Este campo es obligatorio' },
                });

                return false;
            }
            if (!validateRut(credentials.user.rut)) return false;
        }

        return true;
    };

    const handleLogin = async e => {
        e.preventDefault();

        if (!validateForm()) return;

        window.alert('todo bien!!');
    };

    return (
        <div>
            <p className="text-subtitle">Ingrese sus credenciales</p>
            <form onSubmit={handleLogin} className="mt-4 space-y-4">
                <div>
                    <InputRutLogin
                        credentials={credentials}
                        setCredentials={setCredentials}
                    />
                </div>

                <div>
                    <label htmlFor="rut" className="text-description">
                        Contraseña
                    </label>
                    <Input
                        type="password"
                        id="password"
                        value={credentials?.user?.password}
                        autoComplete="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        onChange={handleInputChange}
                        error={credentials?.error?.password}
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="md:order-2">
                        <Button type="submit">Ingresar</Button>
                    </div>
                    <div className="relative group flex items-center">
                        <button
                            type="button"
                            onClick={() => setForgotPassword(!forgotPassword)}
                            className="text-gray-500 text-start mt-2"
                        >
                            <span>¿Olvidaste tu contraseña?</span>
                        </button>
                        <div className="bg-gray-700 w-5 h-5 md:top-full rotate-45 hidden group-hover:block absolute left-1/2 right-1/2" />
                        <div className="absolute z-40 md:top-full -right-2 mb-2 w-48 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded shadow-lg">
                            Si has olvidado tu contraseña, por favor contacta al
                            encargado del área de salud para restablecerla.{' '}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
