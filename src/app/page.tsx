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
      task: "Assignments Next.js",
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
  const handleEditClick=()=>{
    alert("edit");
  }
  return (
   
     <div className="flex min-h-screen flex-col items-center  bg-gradient-to-r from-slate-700 to-amber-100">
        <h1 className=" text-2xl text-stone-800 p-8">Todo List</h1>
       
          <div className="container mx-auto px-52 flex items-center space-x-6  p-3 rounded-md">
            <Input
              classN="h-12 border-zinc-100 border-2 text-black flex-grow rounded-md"
              name="todo"
              value={todo}
              placeholder="Enter task"
              onChange={onChange}
            />
            <Button  button_value="Add Todo" onclick={addTodo} />
            </div>
            <div className="container mx-auto px-52  items-center space-x-2  p-3 rounded-md">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center border border-gray-400 bg-slate-200 rounded-md p-3 mt-4 " >
              <span className="flex-grow">Title: {todo.task}</span>
              <div className="flex items-center space-x-8">
                <Input type="checkbox" placeholder="Check Status" name="checkbox" />
                
                <button className="text-red-500" onClick={() => removeItem(todo.id)}>🗑️</button>
                

                </div>
             
            </div>
          ))}
        </div>
        </div>
  );
}

export default StateAsASnapShot;
