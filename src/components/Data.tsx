import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type DatesProps = {
  order: OrderItem[];
  setTip: (Tip: number) => void;
    tip: number;
};

export function Data({order, setTip, tip}: DatesProps) {


  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

  return (
    <>
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
          <p>{formatCurrency(subtotalAmount)}</p>
        </div>
        <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
          <p>{formatCurrency(subtotalAmount * (tip / 100))}</p>
        </div>
        <div className="flex gap-3 text-center justify-center font-bold text-shadow-lg">
          <p>{formatCurrency((subtotalAmount * (tip / 100)) + subtotalAmount)}</p>
        </div>
      </div>
    </>
  );
}
