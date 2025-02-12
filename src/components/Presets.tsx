import { useEffect, useState } from "react";

import PresetCard from "./PresetCard";

export interface PresetType {
  title: string;
  author: string;
  previewPreset: string;
  img: string;
  DownloadMusic: string;
  DownloadXML: string;
  directAM: string;
  genre: string;
}

const Presets = () => {
  const CONFIG_URL = import.meta.env.VITE_CONFIG_URL;
  const [presets, setPresets] = useState<PresetType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    fetch(CONFIG_URL)
      .then((response) => response.json())
      .then((data) => setPresets(data));
  }, []);

  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = presets.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate the range of pagination buttons to display
  const totalPages = Math.ceil(presets.length / itemsPerPage);
  const maxButtons = 5; // Maximum number of pagination buttons to display
  const halfMaxButtons = Math.floor(maxButtons / 2);

  let startPage = Math.max(1, currentPage - halfMaxButtons);
  let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

  // Adjust the range if near the start or end
  if (currentPage <= halfMaxButtons) {
    endPage = Math.min(maxButtons, totalPages);
  }
  if (currentPage >= totalPages - halfMaxButtons) {
    startPage = Math.max(totalPages - maxButtons + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <section className="h-full">
      <div className=" overflow-auto  flex flex-col items-center  h-screen bg-[#13141b] w-screen p-2 md:p-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {currentItems.length === 0 ? (
            <div className="text-white">Loading...</div>
          ) : (
            currentItems.map(
              (
                {
                  title,
                  author,
                  previewPreset,
                  img,
                  DownloadXML,
                  DownloadMusic,
                  directAM,
                  genre,
                },
                id
              ) => (
                <PresetCard
                  key={id}
                  title={title}
                  author={author}
                  previewPreset={previewPreset}
                  img={img}
                  DownloadXML={DownloadXML}
                  DownloadMusic={DownloadMusic}
                  directAM={directAM}
                  genre={genre}
                />
              )
            )
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center my-4">
          {/* Previous Button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            {"<"}
          </button>

          {/* Pagination Buttons */}
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Presets;
