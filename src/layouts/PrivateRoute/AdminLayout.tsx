import Sidebar from '@/components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
       <div className='flex gap-4 w-full bg-zinc-50 h-full'>
        <Sidebar />
        <div className='p-4 mt-10 w-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
