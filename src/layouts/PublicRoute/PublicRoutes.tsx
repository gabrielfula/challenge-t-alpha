import { Outlet } from 'react-router-dom'

import Logo from "/public/images/t-alpha-logo.png"

export default function PublicRoutes() {
  return (
    <>
      <div className='flex flex-col gap-10 justify-center h-screen items-center'>
        <img src={Logo} alt="Logo" />
        <Outlet />
      </div>
    </>
  )
}
