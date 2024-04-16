import Picture from '../utils/Picture';

export default function ItemClinic({ item }) {
    const { name, src, director, address, phone, email, description } = item;
    return (
        <div className="text-description flex gap-4 md:gap-8 flex-col md:flex-row">
            <Picture
                url={src}
                alt="Imagen de la clínica"
                style="aspect-square object-center object-cover w-[320px] h-[200px] lg:h-[320px] lg:w-[400px]  rounded flex-1"
                pic="w-[320px] h-[200px] lg:h-[320px] lg:w-[400px]"
            />
            <div className="flex-1">
                <h2 className="text-subtitle">{name}</h2>
                <hr className="border-[1px] border-third rounded" />
                <div className="flex flex-col mt-3 space-y-2">
                    <div>{description}</div>
                    <div>
                        <strong>Director: </strong>
                        {director}
                    </div>
                    <div>
                        <strong>Dirección:</strong>
                        {address}
                    </div>
                    <div>
                        <strong>Email:</strong> {email}
                    </div>
                    <div>
                        <strong>Teléfono:</strong> {phone}
                    </div>
                </div>
            </div>
        </div>
    );
}
