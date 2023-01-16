"use client";

import { useEffect, useState, useRef } from "react";

export default function Entry({
  todoData,
  setTodoData,
}: {
  todoData: ListItem[];
  setTodoData: Function;
}) {
  const entryRef = useRef();

  function addItem(event: any) {
    const ref = entryRef.current;

    if (ref) {
      //@ts-ignore
      const item = ref.value;
      if (item == "" || item == undefined) return;

      const newItem: ListItem = {
        item: item,
        status: "Incomplete",
        id: crypto.randomUUID(),
      };

      const updatedData = [...todoData, newItem];

      //@ts-ignore
      ref.value = "";

      setTodoData(updatedData);
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      addItem(event);
    }
  };

  return (
    <div>
      <h2 className="text-center mt-4">Add Item</h2>
      <div>
        <input
          className="bg-slate-800 rounded-md p-1 focus:outline-none"
          type="text"
          name="entry-field"
          id="entry-field"
          //@ts-ignore
          ref={entryRef}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white rounded-md p-1 pl-4 pr-4 ml-1"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </div>
  );
}
