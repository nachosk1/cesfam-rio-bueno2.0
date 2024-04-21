import { useEffect, useState } from 'react';
import { formatRut, validateRut } from '../../../utils/rut';
import Input from '../utils/Input';

export default function InputRutLogin({ credentials, setCredentials }) {
    const [shouldCheck, setShouldCheck] = useState(false);
    useEffect(() => {
        if (shouldCheck) {
            checkRut();
        }
    }, [shouldCheck]);

    const checkRut = async () => {
        if (validateRut(credentials?.user?.rut)) {
            setCredentials({ error: { rut: 'R.U.T inválido' } });
        }
    };

    const handleRutChange = e => {
        const { value } = e.target;
        if (value.length > 12) return;
        const rut = formatRut(value);

        setCredentials(prevCredentials => ({
            ...prevCredentials,
            user: { ...prevCredentials.user, rut },
        }));

        if (credentials?.error?.rut) {
            setCredentials(prevCredentials => ({
                ...prevCredentials,
                error: { rut: '' },
            }));
        }
    };

    const handleRutBlur = e => {
        const { value } = e.target;
        if (value.length > 12) return;
        const rut = formatRut(value);

        setCredentials(prevCredentials => ({
            ...prevCredentials,
            user: {
                ...prevCredentials.user,
                rut: rut,
            },
            error: {
                ...prevCredentials.error,
                rut: validateRut(rut) ? '' : 'R.U.T inválido',
            },
        }));

        if (!validateRut(rut)) {
            setShouldCheck(true);
        }
    };
    return (
        <>
            <label htmlFor="rut" className="text-description">
                N° de documento <span className="font-bold">*</span>
            </label>
            <Input
                type="text"
                id="rut"
                placeholder="Ingrese su R.U.T"
                autoComplete="rut"
                value={credentials?.user?.rut}
                name="rut"
                error={credentials?.error?.rut}
                onChange={handleRutChange}
                onBlur={handleRutBlur}
            />
        </>
    );
}
