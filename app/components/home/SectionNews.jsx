import { Link } from "@remix-run/react";
import News from "../news-events/News";
import Button from "../utils/Button";
import { news } from "../../../constant";

export default function SectionNews() {
  const firstThreeNews = news.slice(0, 3);

  return (
    <>
      <section className="mt-10 md:mt-16">
        <h2 className="text-heading text-center">Noticias</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {firstThreeNews.map((item) => (
            <News key={item.id} news={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/noticias-y-eventos">
            <Button color="bg-third" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
              </svg>
              Ver todas las noticias
            </Button>
          </Link>
        </div>
      </section>
      <hr className="mb-4 mt-10" />
    </>
  );
}
