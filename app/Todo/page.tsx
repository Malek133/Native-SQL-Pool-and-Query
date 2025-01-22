import {Pool} from 'pg'

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

async function getTodos() {

  const client = new Pool({
    connectionString:process.env.DATABASE_URL,
  })
  const {rows} = await client.query<Todo>(`SELECT * from todo`)
  return rows
}

export default async function Page() {
  const readTodos = await getTodos()
  return (
    <div className="mx-auto max-w-2xl p-6 text-lg">
    <h1 className="mb-4 text-center text-3xl font-bold">Todo List</h1>
    { readTodos.map((todo:Todo) => (
      <div key={todo.id}>
       <input
          type="checkbox"
          id={todo.id.toString()}
          name={todo.title}
           defaultChecked={todo.isCompleted}
        ></input> 
        <label htmlFor={todo.id.toString()}>{todo.title}</label>
      </div>
    ))}
  </div>
  )
}


