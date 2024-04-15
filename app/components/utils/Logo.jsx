import Picture from './Picture';

export default function Logo({ type = 'short' }) {
    const isLarge = type === 'large';

    return (
        <div>
            {isLarge ? (
                <Picture
                    url={'/home/logo.png'}
                    alt={'Large Logo'}
                    style={'aspect-square object-contain w-40 h-20'}
                />
            ) : (
                <Picture
                    url={'/home/logo.png'}
                    alt={'Small Logo'}
                    style={'aspect-square object-contain w-28 h-14'}
                />
            )}
        </div>
    );
}
