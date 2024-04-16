export default function ItemBenefit({ item }) {
    return (
        <div className="flex gap-x-2 md:gap-x-4">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check-lg text-primary w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
            </div>
            <span className="text-description">{item}</span>
        </div>
    );
}
