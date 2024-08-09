import { Outlet } from 'react-router-dom'

import Logo from "/public/images/t-alpha-logo.png"

export default function PublicRoutes() {
  return (
    <>
      <div className='flex flex-col gap-10 justify-center h-screen items-center'>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='w-1/3'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
