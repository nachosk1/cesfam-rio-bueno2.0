import { Link } from '@remix-run/react';

import Picture from '../utils/Picture';
import Button from '../utils/Button';
import { specialtiesMore } from '../../../constant';

export default function ListMoreSpecialties() {
    return (
        <section className="my-8">
            <h2 className="text-subtitle">Descubre Más</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {specialtiesMore.map(({ title, description, image, href }) => (
                    <div
                        className="rounded shadow-lg overflow-hidden"
                        key={title}
                    >
                        <div className="overflow-hidden">
                            <Picture
                                url={image}
                                alt={`imagen ${title}`}
                                style="w-full h-56 object-cover hover:scale-110 transition duration-300 ease-in-out transform"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex flex-col justify-between md:min-h-[150px]">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 text-description">
                                        {description}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link to={href} className="rounded">
                                        <Button color={'bg-third'}>
                                            Saber más
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
