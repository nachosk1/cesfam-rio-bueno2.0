import { Link } from "@remix-run/react";

export default function ListFooter({footerLinks}) {
  return (
    <div className="footer__links">
      {footerLinks.map((link) => (
        <div key={link.title} className="footer__link">
          <h2 className="font-bold text-third mb-1" title={link.title}>
            {link.title}
          </h2>
          {link.links.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out" 
              title={item.title}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
