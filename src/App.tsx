import { useState } from "react";
import { menuItems } from "./data/db";

function App() {
  const [pagination, setPagination] = useState<[number, number]>([0, 25]);

  return (
    <>
      <header className="py-4 bg-yellow-950">
        <h1 className="text-5xl text-center font-black text-white">
          Calculadora De Propinas
        </h1>
      </header>
      <main className="bg-yellow-900 min-h-screen p-4">
        <h2 className="text-center text-4xl font-bold text-white mt-3 mb-5">
          Menu
        </h2>
        <div className="row-gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.slice(pagination[0], pagination[1]).map((item) => (
            <div
              key={item.id}
              className="bg-yellow-950 border-1 text-white px-2 pb-2 m-1 rounded col-span-1 h-20 cursor-pointer transition-all duration-100 hover:text-gray-300 active:brightness-90 hover:brightness-100 select-none active:scale-98"
            >
              <div className="flex gap-6 justify-between items-center mt-1">
                <div>
                  <h3 className="font-semibold">{item.id}</h3>
                </div>
                <div>
                  <p className="font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <p className="text-center font-bold">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-2 text-white">
          <button className={`font-black ${pagination[0] == 0 && "text-gray-300"} cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl mx-2`} onClick={() => {setPagination([0, 25])}}>1</button>
          <button className={`font-black ${pagination[0] == 25 && "text-gray-300"} cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl mx-2`} onClick={() => {setPagination([25, 50])}}>2</button>
          <button className={`font-black ${pagination[0] == 50 && "text-gray-300"} cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl mx-2`} onClick={() => {setPagination([50, 75])}}>3</button>
          <button className={`font-black ${pagination[0] == 75 && "text-gray-300"} cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl mx-2`} onClick={() => {setPagination([75, 100])}}>4</button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
