"use client"

import { Bell, Plus, Search } from "lucide-react"

// Later this will come from your auth session
// e.g. const { data: session } = useSession()
const user = {
  name: "Jordan Davis",
  firstName: "Jordan",
}

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 18) return "Good afternoon"
  return "Good evening"
}

export default function Header() {
  return (
    <header
      className="flex items-center gap-3 px-6 h-14 flex-shrink-0"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: "#141414" }}
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">
          {getGreeting()}, {user.firstName}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
          {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Search */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", width: "220px" }}
      >
        <Search size={13} style={{ color: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          Search transactions, assets...
        </span>
      </div>

      <button
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <Bell size={15} style={{ color: "rgba(255,255,255,0.4)" }} />
      </button>

      <button
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold flex-shrink-0"
        style={{ background: "#00C7A3", color: "#141414" }}
      >
        <Plus size={13} />
        Link Account
      </button>
    </header>
  )
}