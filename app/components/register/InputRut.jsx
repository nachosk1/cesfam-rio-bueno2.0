import { useEffect, useState } from 'react';
import { formatRut, validateRut } from '../../../utils/rut';
import Input from '../utils/Input';

export default function InputRut({ account, setAccount, fail, setFail }) {
    const [shouldCheck, setShouldCheck] = useState(false);
    useEffect(() => {
        if (shouldCheck) {
            checkRut();
        }
    }, [shouldCheck]);

    const checkRut = async () => {
        if (validateRut(account?.user?.rut)) {
            setFail({ user: { rut: 'R.U.T inválido' } });
        }
    };

    const handleRutChange = e => {
        const { value } = e.target;
        if (value.length > 12) return;
        const rut = formatRut(value);

        setAccount({ ...account, user: { rut: rut } });

        if (fail?.user?.rut) {
            setFail({ user: { rut: '' } });
        }
    };

    const handleRutBlur = e => {
        const { value } = e.target;
        if (value.length > 12) return;
        const rut = formatRut(value);

        setAccount({ ...account, user: { rut: rut } });

        if (!validateRut(rut)) {
            setFail({ user: { rut: 'R.U.T inválido' } });
            setShouldCheck(true);
        } else {
            setFail({ user: { rut: '' } });
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
                placeholder="Ej: 12345678-9"
                autoComplete="rut"
                value={account?.user?.rut}
                name="rut"
                error={fail?.user?.rut}
                onChange={handleRutChange}
                onBlur={handleRutBlur}
            />
        </>
    );
}
