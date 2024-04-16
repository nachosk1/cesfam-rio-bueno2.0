export default function Map({ location }) {
    return (
        <>
            <iframe
                src={location}
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded"
            ></iframe>
        </>
    );
}
