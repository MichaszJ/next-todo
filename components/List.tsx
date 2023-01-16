"use client";

import Item from "./Item";

export default function List({
  todoData,
  setTodoData,
}: {
  todoData: ListItem[];
  setTodoData: Function;
}) {
  return (
    <div className="mt-6 flex flex-col gap-2">
      {/* Filter so incomplete items appear first */}
      {todoData
        .filter((item) => item.status === "Incomplete")
        .map((item) => {
          return (
            <Item
              key={item.id}
              itemId={item.id}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          );
        })}

      {todoData
        .filter((item) => item.status === "Complete")
        .map((item) => {
          return (
            <Item
              key={item.id}
              itemId={item.id}
              todoData={todoData}
              setTodoData={setTodoData}
            />
          );
        })}
    </div>
  );
}
