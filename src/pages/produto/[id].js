import { useRouter } from "next/router"

export default function Produto() {

    const route = useRouter()

    const { data: session } = useSession();

    const { id } = route.query
    return (
      <div>
       <h1>Produto {id}</h1>
      </div>
    )
  }
  