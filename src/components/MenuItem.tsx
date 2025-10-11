import React from "react";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item : MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <div>
      <div
        className="bg-yellow-950 border-1 text-white px-2 pb-2 m-1 rounded col-span-1 h-20 w-[%80] cursor-pointer transition-all duration-100 hover:text-gray-300 active:brightness-90 hover:brightness-100 select-none active:scale-98"
        onClick={() => {
          addItem(item);
        }}
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
    </div>
  );
}
