import { useState } from "react";

import Pagination from "./Pagination";
import News from "./News";

export default function ListNews({ newsList }) {
  console.log(newsList)
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3; // Define cuántos elementos quieres por página

  const lastItemIndex = currentPage * itemsPerPage; // 6 * 1 = 6
  const firstItemIndex = lastItemIndex - itemsPerPage; // 6 - 6 = 0
  const currentItems = newsList.slice(firstItemIndex, lastItemIndex); // newsData.slice(0, 6), mostrara 6 elementos

  // Calcula el número total de páginas.
  // Math.ceil() es una función en JavaScript que redondea un número hacia arriba al entero más próximo.
  // Por ejemplo, si tienes un número como 2.3 y aplicas Math.ceil() a este, el resultado será 3.
  const pageCount = Math.ceil(newsList.length / itemsPerPage);

  // Cambia la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <News key={item.id} news={item} />
        ))}
      </div>
      <Pagination
        pageCount={pageCount}
        paginate={paginate}
        newsList={newsList}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
