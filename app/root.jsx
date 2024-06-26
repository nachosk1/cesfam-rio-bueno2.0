import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    LiveReload,
} from '@remix-run/react';

import NavBar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';

import stylesheet from './styles/tailwind.css';
import swiperStyle from './styles/swiper.css';

export const links = () => [
    { rel: 'stylesheet', href: stylesheet, type: 'text/css' },
    { rel: 'stylesheet', href: swiperStyle, type: 'text/css' },
];

export default function App() {
    return <Outlet />;
}

export function Layout({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="lang" content="es" />
                <meta name="theme-color" content="#4CAF50" />
                <Links />
            </head>
            <body>
                <NavBar />
                <main className="bg-background">{children}</main>
                <Footer />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
