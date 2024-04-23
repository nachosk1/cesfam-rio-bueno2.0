const Picture = ({ url, alt = '', style, width, height, pic }) => {
    return (
        <picture className={pic}>
            <source
                type="image/webp"
                srcSet={`${url.replace(/\.(png|jpg|jpeg)$/i, '.webp') || ''}`}
            />
            <source
                type="image/avif"
                srcSet={`${url.replace(/\.(png|jpg|jpeg)$/i, '.avif') || ''}`}
            />
            <img
                className={style}F
                src={url || ''}
                alt={alt || 'Backgound Image'}
                width={width}
                height={height}
            />
        </picture>
    );
};

export default Picture;
