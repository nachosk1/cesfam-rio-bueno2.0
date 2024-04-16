const Picture = ({ url, alt = '', style, width, height, pic }) => {
    return (
        <picture className={pic}>
            <img
                className={style}
                src={url}
                alt={alt || 'Backgound Image'}
                width={width}
                height={height}
            />
        </picture>
    );
};

export default Picture;
