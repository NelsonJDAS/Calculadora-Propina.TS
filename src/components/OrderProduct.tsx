import React from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type ItemProduct = {
  item: OrderItem;
  remover: (id: number) => void;
};


export default function OrderProduct({ item, remover}: ItemProduct) {
  return (
    <div className="grid grid-cols-3 gap-2 border-t border-white py-3 last-of-type:border-b">
      <div className="flex items-center justify-center">
        <p>{item.quantity}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm">{formatCurrency(item.price)} - {item.name}</p>
      </div>
      <div className="flex items-center justify-center gap-2 ml-8">
        <p className="">{formatCurrency(item.price * item.quantity)}</p>
        <button className="text-red-500 text-base font-bold hover:text-red-700 mb-1" onClick={() => {
          remover(item.id);
        }}>
          x
        </button>
      </div>
    </div>
  );
}
