import Picture from '../utils/Picture';

export default function SectionIcons() {
    return (
        <div className="grid grid-cols-3 gap-y-4 place-items-center">
            <div>
                <Picture
                    url={
                        'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842859/oleodinamica/logo_accredited_dcc28b9192.webp'
                    }
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={
                        'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842859/oleodinamica/logo_muni_ee41239755.webp'
                    }
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={
                        'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713842859/oleodinamica/logo_centro_de_salud_2d05820929.webp'
                    }
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
        </div>
    );
}
