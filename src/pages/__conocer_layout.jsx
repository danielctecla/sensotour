export default function MainLayout() {
  return (
    <main className="text-black bg-gray-800 h-full w-full">
      <Navbar />
      <div className="">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
    </main>
  )
}
