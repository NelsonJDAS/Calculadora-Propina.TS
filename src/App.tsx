import { useEffect, useState } from "react";
import { menuItems } from "./data/db";

function App() {
  const [pagination, setPagination] = useState<[number, number]>([0, 20]);
  const [tip, setTip] = useState<number>(10);

  useEffect(() => {
    console.log(pagination, tip);
  }, [pagination, tip]);

  return (
    <>
      <header className="py-4 bg-yellow-950">
        <h1 className="text-5xl text-center font-black text-white">
          Calculadora De Propinas
        </h1>
      </header>
      <main className="bg-yellow-900 min-h-screen p-4">
        <div className="bg-yellow-950 text-white p-4 rounded text-center">
          <h2 className="text-xl font-bold">Lista De Productos</h2>
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="flex gap-4 text-center justify-center font-bold text-shadow-lg">
              <p>Cantidad</p>
            </div>
            <div className="flex gap-4 text-center justify-center font-bold text-shadow-lg">
              <p>Producto</p>
            </div>
            <div className="flex gap-4 text-center justify-center font-bold text-shadow-lg">
              <p>Precio</p>
            </div>
          </div>
          <div className="h-50 scrollbar-css">
            <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white py-2">
              <div className="flex gap-4 text-center justify-center">
                <p>2</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>Rebanada de Pastel de Chocolate</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p>$30</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 my-2">
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>Propina</p>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>Subtotal</p>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>Propina</p>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>Total a Pagar</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <button
                className={`font-black ${
                  tip == 10 ? "text-white text-lg" : "text-sm"
                } text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 `}
                onClick={() => {
                  setTip(10);
                }}
              >
                10%
              </button>
              <button
                className={`font-black ${
                  tip == 20 ? "text-white text-lg" : "text-sm"
                } text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 `}
                onClick={() => {
                  setTip(20);
                }}
              >
                20%
              </button>
              <button
                className={`font-black ${
                  tip == 30 ? "text-white text-lg" : "text-sm"
                } text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 `}
                onClick={() => {
                  setTip(30);
                }}
              >
                30%
              </button>
              <button
                className={`font-black ${
                  tip == 50 ? "text-white text-lg" : "text-sm"
                } text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 `}
                onClick={() => {
                  setTip(50);
                }}
              >
                50%
              </button>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>$80</p>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>$8</p>
            </div>
            <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
              <p>$88</p>
            </div>
          </div>
        </div>
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
          <button
            className={`font-black ${
              pagination[0] == 0 && "text-gray-300"
            } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
            onClick={() => {
              setPagination([0, 20]);
            }}
          >
            1
          </button>
          <button
            className={`font-black ${
              pagination[0] == 25 && "text-gray-300"
            } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
            onClick={() => {
              setPagination([20, 40]);
            }}
          >
            2
          </button>
          <button
            className={`font-black ${
              pagination[0] == 50 && "text-gray-300"
            } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
            onClick={() => {
              setPagination([40, 60]);
            }}
          >
            3
          </button>
          <button
            className={`font-black ${
              pagination[0] == 75 && "text-gray-300"
            } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
            onClick={() => {
              setPagination([60, 80]);
            }}
          >
            4
          </button>
          <button
            className={`font-black ${
              pagination[0] == 75 && "text-gray-300"
            } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
            onClick={() => {
              setPagination([80, 100]);
            }}
          >
            5
          </button>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
