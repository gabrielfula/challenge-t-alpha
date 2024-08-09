import { useAuth } from '@/context/useAuth';
import { LogOut, PackageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

  const { signout } = useAuth();

  return (
   <>
      <aside className="bg-background w-56 justify-center shadow pt-10 flex fixed bottom-0 top-0">
        <div className="flex flex-col gap-8 items-start">
          <h3 className="mb-10 text-lg font-bold">Administração</h3>
            <div>
              <Link
                to="/produtos"
                className="flex text[-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
              >
                <PackageIcon className="h-5 w-5" />
                Produtos
              </Link>
            </div>
       
          <div className="flex justify-center items-center">
            <button
              onClick={signout}
              className="flex text-sm gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
            >
              <LogOut className="h-5 w-5" />
              Sair
            </button>
          </div>
        </div>
      </aside>
   </>
  )
}
