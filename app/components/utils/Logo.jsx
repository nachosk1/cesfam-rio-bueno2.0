import Picture from './Picture';

export default function Logo({ type = 'short' }) {
    const isLarge = type === 'large';

    return (
        <div className='w1'>
            {isLarge ? (
                <Picture
                    url={'/home/logo.png'}
                    alt={'Large Logo'}
                    style={'aspect-square object-contain w-28 h-12 md:w-40 md:h-20'}
                />
            ) : (
                <Picture
                    url={'/home/logo.png'}
                    alt={'Small Logo'}
                    style={'aspect-square object-contain w-20 h-10 md:w-28 md:h-14'}
                />
            )}
        </div>
    );
}
