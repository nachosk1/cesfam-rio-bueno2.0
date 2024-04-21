import { useState } from 'react';

import RegisterUser from './RegisterUser';
import RegisterProfile from './RegisterProfile';
import Button from '../../components/utils/Button';
import { validateRut } from '../../../utils/rut';

export default function FormRegister() {
    const [account, setAccount] = useState({
        user: {
            rut: '',
            password: '',
            password_confirmation: '',
        },
        profile: {
            email: '',
            name: '',
            lastname: '',
            birth: '',
            sex: '',
            address: '',
            phone: '',
        },
    });

    const [fail, setFail] = useState({
        user: {
            rut: '',
            password: '',
            password_confirmation: '',
        },
        profile: {
            email: '',
            name: '',
            lastname: '',
            birth: '',
            sex: '',
            address: '',
            phone: '',
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = (secondStep = 1) => {
        if (!validateRut(account?.user?.rut)) {
            setFail({
                ...fail,
                user: { rut: 'El RUT ingresado no es válido.' },
            });
            return false;
        }

        for (const key in account.profile) {
            if (key === 'email') continue;
            if (account?.profile?.[key].trim() === '') {
                setFail({
                    ...fail,
                    profile: { [key]: 'Este campo es obligatorio.' },
                });
                return false;
            }
        }

        if (secondStep === 2) {
            for (const key in account?.user) {
                if (account?.user?.[key].trim() === '') {
                    setFail({
                        ...fail,
                        user: { [key]: 'Este campo es obligatorio.' },
                    });
                    return false;
                }
            }

            if (
                account?.user?.password !== account?.user?.password_confirmation
            ) {
                setFail({
                    ...fail,
                    user: {
                        password_confirmation: 'Contraseñas no coinciden',
                    },
                });

                return false;
            }
        }

        return true;
    };

    const handleNextStep = async e => {
        e.preventDefault();

        if (!validateForm(1)) return;

        setFormSubmitted(true);
        router.push('#form-register');
    };

    const clickPrev = () => {
        setFormSubmitted(false);
        setAccount({
            user: {
                rut: account?.user?.rut,
                password: '',
                password_confirmation: '',
            },
            profile: {
                email: account?.profile?.email,
                name: account?.profile?.name,
                lastname: account?.profile?.lastname,
                birth: account?.profile?.birth,
                sex: account?.profile?.sex,
                address: account?.profile?.address,
                phone: account?.profile?.phone,
            },
        });
    };

    const handleCreateAccount = async e => {
        e.preventDefault();
        if (!validateForm(2)) return;

        window.alert('Formulario validado correctamente');
    };

    return (
        <div>
            <p className="text-subtitle">Complete el formulario</p>
            <p>
                -Los campos marcados con un <span className="font-bold">*</span>{' '}
                son obligatorios.
            </p>
            <p>
                -Es importante que los datos ingresados sean válidos y seguros,
                ya que serán usados para contactarte.
            </p>
            <form
                onSubmit={formSubmitted ? handleCreateAccount : handleNextStep}
                className="mt-4 min-h-[60vh]"
            >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    {formSubmitted ? (
                        <RegisterUser
                            account={account}
                            fail={fail}
                            setAccount={setAccount}
                            setFail={setFail}
                        />
                    ) : (
                        <RegisterProfile
                            account={account}
                            fail={fail}
                            setAccount={setAccount}
                            setFail={setFail}
                        />
                    )}
                </div>
                <div className="flex justify-between mt-6">
                    <Button
                        type="button"
                        color="bg-gray-500"
                        href={formSubmitted ? undefined : '/'}
                        onClick={() => {
                            if (formSubmitted) clickPrev();
                        }}
                    >
                        Volver
                    </Button>
                    <Button type="submit">Siguiente</Button>
                </div>
            </form>
        </div>
    );
}
