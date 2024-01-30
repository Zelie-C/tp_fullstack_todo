import { useSession } from "next-auth/react"
import { useMemo } from "react"

const AddTodo = () => {
  const { data: session, status } = useSession()
  const connected = useMemo(() => status === "authenticated", [])

  return (
    <>
      {connected &&
        <>
          <h1>Ajouter une tâche</h1>
          <label htmlFor="addTask">Nouvelle tâche</label>
          <input type="text" name="addTask" id="" />
        </>
      }
    </>
  )
}

export default AddTodo
