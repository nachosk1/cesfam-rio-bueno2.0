import { useState } from 'react';
import { infoBenefit, benefitsGES } from '../../constant';
import ItemBenefit from '../components/benefit/ItemBenefit';
import Container from '../components/utils/Container';
import Picture from '../components/utils/Picture';

export default function FenefitsLetter() {
    const [selectedCategory, setSelectedCategory] = useState(infoBenefit[0]);

    const handleRadioChange = category => {
        setSelectedCategory(category);
    };

    return (
        <div className="mt-8 md:mt-10">
            <Container>
                <div className="mb-10">
                    <h1 className="text-heading">Carta de Prestaciones</h1>
                    <div className="relative flex flex-col md:flex-row items-center flex-wrap border border-gray-200 rounded bg-gray-100 box-border shadow-sm text-sm md:text-base mt-2 md:mt-6">
                        {infoBenefit.map(category => (
                            <label
                                className="md:flex-1 text-center w-full h-full flex-grow font-medium"
                                key={category?.title}
                                onClick={() => handleRadioChange(category)}
                            >
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={selectedCategory === category}
                                    onChange={() => {}}
                                    value={category?.title}
                                    className="hidden"
                                />
                                <span
                                    className={`flex items-center justify-center w-full h-full cursor-pointer p-2 md:p-4 border-2 border-none transition-all duration-300 ${
                                        selectedCategory === category &&
                                        'bg-primary flex-grow text-white'
                                    }`}
                                >
                                    {category.title}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <InfoBenefit
                            title={selectedCategory?.title}
                            benefit={selectedCategory?.benefit}
                        />
                        <div>
                            <Picture
                                url={selectedCategory?.image}
                                alt={selectedCategory?.title}
                                style="h-[250px] md:h-[500px] w-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </Container>

            <div className="bg-slate-200 py-10">
                <Container>
                    <InfoBenefit
                        title="Actividades con garantías explícitas en salud asociadas a programas (GES)"
                        benefit={benefitsGES}
                    />
                </Container>
            </div>
        </div>
    );
}

const InfoBenefit = ({ title, benefit }) => (
    <div className="space-y-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">{title}</h2>
        <div className="space-y-4">
            {benefit.map(item => (
                <ItemBenefit key={item} item={item} />
            ))}
        </div>
    </div>
);
