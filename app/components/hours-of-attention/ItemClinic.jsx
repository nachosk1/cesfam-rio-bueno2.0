import Picture from '../utils/Picture';

export default function ItemClinic({ item }) {
    const { name, week, thursday, saturday, sunday, src } = item;
    return (
        <div className="mt-2 md:mt-4">
            <div className="text-subtitle">{name}</div>
            <div className="flex gap-4 text-description mt-1">
                <div className="flex justify-center">
                    <div className="relative w-[200px] h-[200px] sm:h-[140px]">
                        <Picture
                            url={src}
                            alt={`Imagen ${name}`}
                            style="rounded-md object-cover"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 lg:justify-between lg:flex-1">
                    <div className="flex flex-col">
                        <strong>Lunes a jueves: </strong>
                        <span>{week} hrs.</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Viernes: </strong>
                        <span>{thursday} hrs.</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Sabado: </strong>
                        <span>{saturday} hrs.</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Domingo: </strong>
                        <span className="flex items-center gap-1 text-third font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                className="bi bi-x-lg stroke-third"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                            {sunday}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
