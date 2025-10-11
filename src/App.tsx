import { useEffect, useState } from "react";
import { menuItems } from "./data/db";
import useOrder from './hooks/useOrder'
import MenuItem from "./components/MenuItem";
import OrderProduct from "./components/OrderProduct";
import { Data } from "./components/Data";

function App() {
  const [pagination, setPagination] = useState<[number, number]>([0, 20]);

  const {order,tip, setTip , addItem, removeItem} = useOrder()

  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

  return (
    <>
      <header className="py-4 bg-yellow-950 select-none">
        <h1 className="text-5xl text-center font-black text-white">
          Calculadora De Propinas
        </h1>
      </header>
      <main className="bg-yellow-900 min-h-screen p-4 flex items-center justify-center select-none">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
          <div>
            <h2 className="text-center text-4xl font-bold text-white mb-5">
              Menu
            </h2>
            <div className="row-gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {menuItems.slice(pagination[0], pagination[1]).map((item) => (
               <MenuItem item={item}  key={item.id} addItem={addItem}/>
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-2 text-white">
              <button
                className={`font-black ${
                  pagination[0] == 0 && "text-gray-300"
                } cursor-pointer transition-colors duration-200 hover:text-gray-400 active:brightness-90 hover:brightness-95 text-1xl p-3`}
                onClick={() => {
                  console.log(order)
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
          </div>
          <div className="bg-yellow-950 text-white p-4 rounded text-center h-100 2xl:h-140 shadow-2xl w-225">
            <h2 className="text-xl font-bold">Lista De Productos</h2>
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="flex text-center justify-center font-bold text-shadow-lg">
                <p>Cantidad</p>
              </div>
              <div className="flex text-center justify-center font-bold text-shadow-lg">
                <p>Producto</p>
              </div>
              <div className="flex text-center justify-center font-bold text-shadow-lg">
                <p>Precio</p>
              </div>
            </div>
            <div className="2xl:h-90 h-50 scrollbar-css">
                {order.length === 0 ? (
                  <p className="text-center text-gray-300 mt-12">No hay productos</p>
                ) : (
                  order.map(item => (
                  <OrderProduct key={item.id} item={item} remover={removeItem}/>
                ))
                )}
            </div>
            <Data order={order} setTip={setTip} tip={tip}/>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
