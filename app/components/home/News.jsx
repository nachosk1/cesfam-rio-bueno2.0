import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import { formatDate } from "@/utils/dateFormat";

export default function News({ news }) {
  const { title, description, banner, created_at, slug  } = news;
  return (
    <div className="border shadow rounded overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
      <div>
        <div className="overflow-hidden">
          <Image
            src={banner}
            width={500}
            height={500}
            alt={`imagen de ${title}`}
            className="hover:scale-125 transition duration-300 ease-in-out transform h-[250px] lg:h-[300px] object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <Link href={`/noticias-y-eventos/${slug}`}>
          <h3 className="text-subtitle mt-4 line-clamp-2">{title}</h3>
        </Link>

        <hr className="my-3" />
        <p className="text-gray-500 text-sm">{formatDate(created_at)}</p>
        <div className="line-clamp-4 mt-2 text-description">{description}</div>
        <div className="flex justify-center items-center mt-4">
          <Link href={`/noticias-y-eventos/${slug}`}>
            <Button color="bg-third">Saber más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
