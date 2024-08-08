import { PackageIcon } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <div className='flex gap-4'>
        <aside className="bg-background shadow h-screen ">
          <nav className="p-4 mt-10 mr-10">
            <h3 className="mb-4 text-lg font-bold">Administração</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  to="#"
                  className="flex text-sm items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-all"           
                >
                  <PackageIcon className="h-5 w-5" />
                  Produtos
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className='p-4 mt-10'>
          <h1>Teste</h1>
          <Outlet />
        </div>
      </div>
    </>
  )
}
