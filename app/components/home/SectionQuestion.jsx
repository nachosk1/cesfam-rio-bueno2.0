import { useState } from 'react';
import Picture from '../utils/Picture';
import { questions } from '../../../constant';

export default function SectionQuestion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = index => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section>
            <h1 className="text-heading text-center">Preguntas Frecuentes</h1>
            <div className="grid lg:grid-cols-2 gap-6 mt-4 md:mt-12">
                <div className="overflow-hidden w-full h-[250px] rounded md:h-[400px] mx-auto">
                    <Picture
                        url="/question/image-question.jpg"
                        alt="imagen pregunta frecuente"
                        style="object-cover hover:scale-105 h-full w-full transition-all duration-300 ease-in-out transform"
                    />
                </div>
                <div>
                    {questions.map((q, index) => (
                        <div key={index} className="mb-2">
                            <button
                                className="text-subtitle border-l-4 border-primary bg-slate-100 p-2 w-full text-left focus:outline-none flex gap-2"
                                onClick={() => handleToggle(index)}
                            >
                                {expandedIndex === index ? (
                                    <div className="pt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-chevron-up text-black h-6 w-6 md:h-5 md:w-5"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="pt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-chevron-down text-black h-6 w-6 md:h-5 md:w-5"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                            />
                                        </svg>
                                    </div>
                                )}
                                {q.question}
                            </button>
                            {expandedIndex === index && (
                                <div className="bg-gray-50 border-l-4 border-primary p-4">
                                    <p className="text-description">
                                        {q.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
