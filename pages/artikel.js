import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/artikel`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Artikel = ({ data }) => {
  return (
    <main>
      <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
          Artikel
        </h1>
        <p className="text-gray-700">
          Beberapa atikel untuk menambah wawasan tentang gangguan kecemasan
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-6xl mx-auto content-center ">
        {data.map((item) => (
          <div key={item.id}>
            <a href={item.artikel} target="_blank" rel="noopener noreferrer">
              <div className="rounded-md border border-black border-opacity-20 ">
                <img
                  className=" w-full h-64 hover:opacity-60 rounded-md"
                  src={item.gambar}
                />
                <div className="px-6 py-4">
                  <h1 className=" flex font-bold text-xl mb-2 text-gray-800  hover:underline">
                    {item.judul}
                    <span className=" ml-2 text-xl">
                      <BsBoxArrowUpRight />
                    </span>
                  </h1>
                  <p className="mt-5 text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Artikel;
