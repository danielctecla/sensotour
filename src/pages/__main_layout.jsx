export default function MainLayout() {
  return (
    <main className="text-black h-full w-full">
      <Navbar />
      <div className="">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <Footer />
    </main>
  )
}
