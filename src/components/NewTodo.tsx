import { useRef } from "react";

export default function NewTodo() {
  const inputRef = useRef<HTMLInputElement>();
  function submitHandler(event: React.FormEvent){
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo: </label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  )
}
 