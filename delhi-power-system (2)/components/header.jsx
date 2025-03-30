import { Bell, Search, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600">EDelhi</h1>
      </div>

      <div className="hidden md:flex items-center relative mx-auto max-w-md w-full px-4">
        <Search className="absolute left-8 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 border-0 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors shadow-sm">
          Emergency
        </button>

        <div className="hidden md:flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-4 w-4 text-blue-600" />
          </div>
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  )
}

