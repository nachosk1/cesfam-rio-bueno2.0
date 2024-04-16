import { useEffect, useState } from 'react';
import Picture from '../utils/Picture';
import { clinic } from '../../../constant';

export default function DeptSummary() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [displayInfo, setDisplayInfo] = useState(clinic[0]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayInfo(clinic[activeIndex]);
        }, 500);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section>
            <div className="flex flex-col md:flex-row">
                <div className="flex w-full gap-1 md:gap-2 items-stretch">
                    {clinic.map((image, index) => (
                        <div
                            key={image.name}
                            className={`rounded relative overflow-hidden transition-all duration-300 ease-in-out ${
                                activeIndex === index ? 'flex-2' : 'flex-0.25'
                            }`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="relative w-full min-h-[200px] md:min-h-[400px] h-full overflow-hidden">
                                <div className="absolute z-30 inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                                    <span className="text-white text-center text-2xl font-bold">
                                        {image.name}
                                    </span>
                                </div>
                                <div
                                    className={`absolute inset-0 group ${
                                        index === 0 && 'hover:scale-110'
                                    }`}
                                >
                                    {' '}
                                    <Picture
                                        url={image.src}
                                        alt={`Imagen ${index + 1}`}
                                        style={`transition-transform h-full w-full hover:scale-125 object-cover duration-300 ease-in-out ${
                                            activeIndex === index
                                                ? 'scale-110'
                                                : ''
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
