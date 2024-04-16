import Picture from '../utils/Picture';

export default function SectionIcons() {
    return (
        <div className="grid grid-cols-3 gap-y-4 place-items-center">
            <div>
                <Picture
                    url={'/home/logo-accredited.webp'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={'/home/logo-muni.webp'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={'/home/logo-centro-de-salud.webp'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
        </div>
    );
}
