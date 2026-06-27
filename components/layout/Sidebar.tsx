"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  BarChart2,
  Receipt,
  Settings,
  TrendingUpIcon,
} from "lucide-react"

const navGroups = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, sub: "Net worth summary" },
      { label: "Accounts", href: "/dashboard/accounts", icon: Wallet, sub: "5 connected", badge: "5", badgeColor: "teal" },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Investments", href: "/dashboard/investments", icon: TrendingUp, sub: "+6.8% this month" },
      { label: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
      { label: "Transactions", href: "/dashboard/transactions", icon: Receipt, badge: "3", badgeColor: "red" },
    ],
  },
]

const bottomItems = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 flex flex-col" style={{ background: "#1a1a1a", borderRight: "1px solid rgba(255,255,255,0.04)" }}>

      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#00C7A3" }}>
          <TrendingUpIcon size={15} style={{ color: "#141414" }} />
        </div>
        <span className="text-white font-semibold text-sm tracking-tight">Wealthview</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2.5 py-4 flex flex-col gap-0.5 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-2">

            {/* Group label */}
            <p className="text-xs font-semibold px-2.5 mb-1" style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.6px", textTransform: "uppercase", fontSize: "10px" }}>
              {group.label}
            </p>

            {group.items.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-0.5 transition-colors"
                  style={{
                    background: isActive ? "rgba(0,199,163,0.1)" : "transparent",
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? "rgba(0,199,163,0.15)" : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <Icon
                      size={14}
                      style={{ color: isActive ? "#00C7A3" : "rgba(255,255,255,0.3)" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)", fontSize: "13px" }}
                    >
                      {item.label}
                    </p>
                    {item.sub && (
                      <p className="text-xs truncate mt-0.5" style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>
                        {item.sub}
                      </p>
                    )}
                  </div>

                  {/* Badge */}
                  {item.badge && (
                    <span
                      className="text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0"
                      style={{
                        fontSize: "9px",
                        background: item.badgeColor === "red" ? "rgba(255,107,107,0.15)" : "rgba(0,199,163,0.15)",
                        color: item.badgeColor === "red" ? "#ff6b6b" : "#00C7A3",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        ))}

        {/* Divider */}
        <div className="my-1" style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />

        {/* Bottom nav items */}
        {bottomItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors"
              style={{ background: isActive ? "rgba(0,199,163,0.1)" : "transparent" }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: isActive ? "rgba(0,199,163,0.15)" : "rgba(255,255,255,0.05)" }}
              >
                <Icon size={14} style={{ color: isActive ? "#00C7A3" : "rgba(255,255,255,0.3)" }} />
              </div>
              <p className="text-sm font-medium" style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)", fontSize: "13px" }}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>

      {/* User profile */}
      <div className="p-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
            style={{ background: "#00C7A3", color: "#141414" }}
          >
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>
              Jordan Davis
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C7A3" }} />
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px" }}>Synced 2m ago</p>
            </div>
          </div>
        </div>
      </div>

    </aside>
  )
}