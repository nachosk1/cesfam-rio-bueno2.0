import Input from '../utils/Input';

export default function RegisterUser({ account, setAccount, fail, setFail }) {
    const handleInputChange = e => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            user: { ...account?.user, [name]: value },
        });
        if (fail?.user?.[name]) {
            setFail({ ...fail, user: { [name]: '' } });
        }
    };
    return (
        <>
            <div>
                <label htmlFor="password" className="text-description">
                    Ingrese una contraseña <span className="font-bold">*</span>
                </label>
                <Input
                    type="password"
                    id="password"
                    autoComplete="password"
                    value={account?.user?.password}
                    name="password"
                    onChange={handleInputChange}
                    error={fail?.user?.password}
                />
            </div>
            <div>
                <label
                    htmlFor="password_confirmation"
                    className="text-description"
                >
                    Repita la contraseña <span className="font-bold">*</span>
                </label>
                <Input
                    type="password"
                    id="password_confirmation"
                    autoComplete="password_confirmation"
                    value={account?.user?.password_confirmation}
                    name="password_confirmation"
                    onChange={handleInputChange}
                    error={fail?.user?.password_confirmation}
                />
            </div>
        </>
    );
}
