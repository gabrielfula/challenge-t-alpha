import { useAuth } from '@/context/useAuth';
import { LogOut, PackageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

  const { signout } = useAuth();

  return (
   <>
     <aside className="bg-background shadow h-full">
      <nav className="p-4 pt-14 flex flex-col items-center">
        <h3 className="mb-10 text-lg font-bold">Administração</h3>
        <ul className="flex flex-col justify-start items-start gap-6">
          <li>
            <Link
              to="/produtos"
              className="flex text[-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
            >
              <PackageIcon className="h-5 w-5" />
              Produtos
            </Link>
          </li>
          <li>
          <button
              onClick={signout}
              className="flex text-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
            >
              <LogOut className="h-5 w-5" />
              Sair
            </button>
          </li>
        </ul>
      </nav>
     </aside>
   </>
  )
}
