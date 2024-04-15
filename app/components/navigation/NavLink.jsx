import { Link, useLocation } from '@remix-run/react';

export default function NavLink({ link }) {
    const { title, url } = link;

    const { pathname } = useLocation();

    return (
        <li>
            <Link
                to={url}
                className={`hover:decoration-slate-50 p-0 hover:text-gray-50 decoration-2 hover:underline transition-all duration-200 ease-in-out underline-offset-4 md:text-center ${
                    pathname === url &&
                    'underline decoration-slate-200 text-gray-50'
                }`}
            >
                {title}
            </Link>
        </li>
    );
}
