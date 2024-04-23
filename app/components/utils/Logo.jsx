import Picture from './Picture';

export default function Logo({ type = 'short' }) {
    const isLarge = type === 'large';

    return (
        <div className="w1">
            {isLarge ? (
                <Picture
                    url={
                        'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713843141/oleodinamica/logo_8578148fdc.png'
                    }
                    alt={'Large Logo'}
                    style={
                        'aspect-square object-contain w-28 h-12 md:w-40 md:h-20'
                    }
                />
            ) : (
                <Picture
                    url={
                        'https://res.cloudinary.com/f6bac5e4d005a4451cd78931/image/upload/v1713843141/oleodinamica/logo_8578148fdc.png'
                    }
                    alt={'Small Logo'}
                    style={
                        'aspect-square object-contain w-20 h-10 md:w-28 md:h-14'
                    }
                />
            )}
        </div>
    );
}
