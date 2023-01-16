"use client";

import Entry from "../components/Entry";
import List from "../components/List";

import testData from "../data.json";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [todoData, setTodoData] = useState<ListItem[]>([]);

  useEffect(() => {
    setTodoData(testData.items);
  }, []);

  return (
    <div className="flex items-center flex-col mt-6 text-white">
      <h1 className="text-3xl font-bold">To-Do List</h1>

      <Entry todoData={todoData} setTodoData={setTodoData} />

      <List todoData={todoData} setTodoData={setTodoData} />

      <p className="absolute bottom-6 text-xs">
        Created by{" "}
        <a
          className="underline text-blue-300"
          href="https://michaszj.github.io/"
        >
          Michal Jagodzinski
        </a>
      </p>
    </div>
  );
}
