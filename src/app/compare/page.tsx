// Gpt code

"use client";

import { Input, Button } from "@/components/Input";
import React, { useState } from "react";

type todo = {
  id: number;
  task: string;
};

function StateAsASnapShot() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 1,
      task: "My Task",
    },
  ]);

  const onChange = (e: any) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        task: todo,
      },
    ];
    if (todo) {
      setTodos(newTodos);
    }
    setTodo("");
  };

  const removeItem = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-700 to-amber-100">
      <div className="gap-8 place-content-center grid container mt-24 mx-auto px-12 py-4">
        <h1 className="text-center">Todo List</h1>
        <div className="flex space-x-2">
          <Input
            classN="h-12 border-zinc-100 border-2 text-black w-96"
            name="todo"
            value={todo}
            placeholder="Enter task"
            onChange={onChange}
          />
          <Button button_value="Add Todo" onclick={addTodo} />
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center justify-between border border-gray-400 rounded-md p-4 mt-4 w-full">
              {todo.task !== "My Task" && (
                <>
                  <span className="flex-grow">Title: {todo.task}</span>
                  <div className="flex items-center space-x-2">
                    <Input classN="flex-shrink-0" type="checkbox" placeholder="Check Status" name="checkbox" />
                    <Button  button_value="Remove" onclick={() => removeItem(todo.id)} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StateAsASnapShot;

