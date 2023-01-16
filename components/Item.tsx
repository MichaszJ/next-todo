"use client";

import { useEffect, useState } from "react";

export default function Item({
  itemId,
  todoData,
  setTodoData,
}: {
  itemId: string;
  todoData: ListItem[];
  setTodoData: Function;
}) {
  const [item, setItem] = useState<ListItem>({ item: "", status: "", id: "" });

  useEffect(() => {
    setItem(todoData.filter((item: ListItem) => item.id === itemId)[0]);
  }, [todoData, itemId]);

  function toggleItem() {
    const newItem: ListItem = {
      item: item.item,
      status: item.status === "Incomplete" ? "Complete" : "Incomplete",
      id: item.id,
    };

    setItem(newItem);

    const updatedData = [
      ...todoData.filter((item) => item.id != itemId),
      newItem,
    ];
    setTodoData(updatedData);
  }

  function deleteItem() {
    const updatedData = todoData.filter((item) => item.id != itemId);
    setTodoData(updatedData);
  }

  return (
    <div className="flex justify-between items-center gap-2 w-64 bg-slate-800 text-white rounded-md p-2 hover:scale-105 transition-all">
      <div
        className="w-full hover:text-blue-300 transition-all cursor-pointer"
        onClick={toggleItem}
      >
        <p
          className={`${
            item.status === "Complete"
              ? "text-slate-500 line-through hover:text-slate-400 transition-all"
              : ""
          }`}
        >
          {item.item}
        </p>
      </div>
      <button
        className="text-red-500 outline outline-transparent outline-2 hover:outline-red-500 transition-all rounded-md  cursor-pointer p-1 pl-2 pr-2"
        onClick={deleteItem}
      >
        X
      </button>
    </div>
  );
}
