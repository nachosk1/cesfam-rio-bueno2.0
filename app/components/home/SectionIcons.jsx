import Picture from '../utils/Picture';

export default function SectionIcons() {
    return (
        <div className="grid grid-cols-3 gap-y-4 place-items-center">
            <div>
                <Picture
                    url={'/home/logo-accredited.jpg'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={'/home/logo-muni.png'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
            <div>
                <Picture
                    url={'/home/logo-centro-de-salud.jpg'}
                    alt="Logo acreditado"
                    style="w-24 md:w-40"
                />
            </div>
        </div>
    );
}
