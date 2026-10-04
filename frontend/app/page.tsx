"use client";

import {
  Truck,
  Package,
  MapPin,
  Clock3,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Search,
  Bell,
  Plus,
  Navigation,
} from "lucide-react";

const shipments = [
  {
    id: "DSP-10482",
    customer: "Amazon Logistics",
    destination: "New Delhi",
    status: "In Transit",
    eta: "Today, 6:40 PM",
    driver: "Arjun Mehta",
    vehicle: "DL 01 AB 4521",
  },
  {
    id: "DSP-10481",
    customer: "Flipkart",
    destination: "Jaipur",
    status: "Out for Delivery",
    eta: "Today, 4:20 PM",
    driver: "Rahul Singh",
    vehicle: "RJ 14 CA 9211",
  },
  {
    id: "DSP-10480",
    customer: "Reliance Retail",
    destination: "Gurugram",
    status: "Delivered",
    eta: "Delivered",
    driver: "Vikas Kumar",
    vehicle: "HR 26 DK 4412",
  },
  {
    id: "DSP-10479",
    customer: "Tata Motors",
    destination: "Noida",
    status: "Delayed",
    eta: "Tomorrow, 10:30 AM",
    driver: "Aman Verma",
    vehicle: "UP 16 BT 7821",
  },
];

const stats = [
  {
    title: "Active Shipments",
    value: "1,284",
    change: "+12.8%",
    icon: Package,
  },
  {
    title: "Vehicles On Road",
    value: "348",
    change: "+8.4%",
    icon: Truck,
  },
  {
    title: "Delivered Today",
    value: "892",
    change: "+18.2%",
    icon: Navigation,
  },
  {
    title: "Delayed",
    value: "24",
    change: "-6.3%",
    icon: Clock3,
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-white/10 bg-[#0a0f1c] p-5 lg:block">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-black font-black">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              DISP<span className="text-cyan-400">Λ</span>TCCH
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Logistics OS
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          <NavItem active icon="◉" label="Dashboard" />
          <NavItem icon="📦" label="Shipments" />
          <NavItem icon="🚛" label="Fleet" />
          <NavItem icon="👤" label="Drivers" />
          <NavItem icon="📍" label="Live Tracking" />
          <NavItem icon="🏢" label="Hubs" />
          <NavItem icon="📊" label="Analytics" />
          <NavItem icon="🤖" label="Intelligence" />
        </nav>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-gray-500">SYSTEM STATUS</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <section className="lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-[#070b14]/80 px-6 backdrop-blur-xl lg:px-10">
          <div>
            <p className="text-sm text-gray-500">Monday, October 5, 2026</p>
            <h2 className="text-xl font-semibold">Good evening, Riya 👋</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 md:flex">
              <Search size={17} className="text-gray-500" />
              <input
                placeholder="Search shipments..."
                className="w-48 bg-transparent text-sm outline-none placeholder:text-gray-600"
              />
              <span className="rounded bg-white/10 px-2 py-1 text-[10px] text-gray-500">
                /
              </span>
            </div>

            <button className="relative rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.07]">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
            </button>

            <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold sm:flex">
              R
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10">
          {/* Hero */}
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/[0.04] to-transparent p-7">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                LIVE LOGISTICS NETWORK
              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Move smarter.
                <br />
                <span className="text-cyan-400">Deliver faster.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                Monitor your entire logistics operation from one intelligent
                command center.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                <Plus size={17} />
                Create Shipment
              </button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-cyan-400/10" />
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-cyan-400/10" />
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                      <Icon size={20} />
                    </div>

                    <span className="flex items-center gap-1 text-xs text-emerald-400">
                      <TrendingUp size={13} />
                      {stat.change}
                    </span>
                  </div>

                  <p className="mt-5 text-sm text-gray-500">{stat.title}</p>
                  <h3 className="mt-1 text-3xl font-bold">{stat.value}</h3>
                </div>
              );
            })}
          </div>

          {/* Map + Intelligence */}
          <div className="mb-8 grid gap-6 xl:grid-cols-3">
            {/* Map */}
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a101c] xl:col-span-2">
              <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Live Fleet Tracking</h3>
                  <p className="text-xs text-gray-500">
                    348 vehicles currently active
                  </p>
                </div>

                <button className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs">
                  View Full Map
                </button>
              </div>

              {/* Fake map */}
              <div className="absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,.15),transparent_30%),linear-gradient(115deg,transparent_48%,rgba(255,255,255,.05)_49%,transparent_50%),linear-gradient(25deg,transparent_48%,rgba(255,255,255,.05)_49%,transparent_50%)]" />
              </div>

              {/* Route */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 800 450"
                fill="none"
              >
                <path
                  d="M80 340 C180 250 190 320 300 220 S500 100 690 160"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  className="text-cyan-400/60"
                />
              </svg>

              <MapPin
                className="absolute left-[18%] top-[65%] text-cyan-400"
                size={30}
              />
              <MapPin
                className="absolute left-[48%] top-[48%] text-cyan-400"
                size={30}
              />
              <MapPin
                className="absolute right-[13%] top-[32%] text-emerald-400"
                size={30}
              />

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                  <span className="text-xs text-gray-300">
                    Network operating normally
                  </span>
                </div>
              </div>
            </div>

            {/* Intelligence */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Dispatcch Intelligence</h3>
                  <p className="text-xs text-gray-500">AI-powered insights</p>
                </div>

                <span className="rounded-lg bg-purple-400/10 px-2 py-1 text-[10px] text-purple-300">
                  AI
                </span>
              </div>

              <div className="space-y-4">
                <Insight
                  icon="⚡"
                  title="Route optimized"
                  text="DSP-10482 can save 18 minutes."
                />

                <Insight
                  icon="⚠️"
                  title="Delay predicted"
                  text="DSP-10479 has a high delay probability."
                />

                <Insight
                  icon="⛽"
                  title="Fuel opportunity"
                  text="3 vehicles can reduce fuel usage."
                />
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-gray-300 hover:bg-white/5">
                View all insights
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Shipments */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <h3 className="font-semibold">Recent Shipments</h3>
                <p className="text-xs text-gray-500">
                  Latest activity across your network
                </p>
              </div>

              <button className="flex items-center gap-1 text-sm text-cyan-400">
                View all
                <ChevronRight size={15} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left">
                <thead className="border-b border-white/10 text-xs text-gray-500">
                  <tr>
                    <th className="px-5 py-4">SHIPMENT</th>
                    <th className="px-5 py-4">CUSTOMER</th>
                    <th className="px-5 py-4">DESTINATION</th>
                    <th className="px-5 py-4">STATUS</th>
                    <th className="px-5 py-4">DRIVER</th>
                    <th className="px-5 py-4">ETA</th>
                  </tr>
                </thead>

                <tbody>
                  {shipments.map((shipment) => (
                    <tr
                      key={shipment.id}
                      className="border-b border-white/5 transition hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-5">
                        <span className="font-medium text-cyan-400">
                          {shipment.id}
                        </span>
                        <p className="mt-1 text-xs text-gray-600">
                          {shipment.vehicle}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm">
                        {shipment.customer}
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin size={14} className="text-gray-500" />
                          {shipment.destination}
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <Status status={shipment.status} />
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-400">
                        {shipment.driver}
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-400">
                        {shipment.eta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row">
            <p>© 2026 Dispatcch Logistics. All rights reserved.</p>
            <p>Powered by Dispatcch Intelligence</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-cyan-400/10 text-cyan-400"
          : "text-gray-500 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="w-5 text-center">{icon}</span>
      {label}
    </button>
  );
}

function Status({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Transit": "bg-blue-400/10 text-blue-400",
    "Out for Delivery": "bg-purple-400/10 text-purple-400",
    Delivered: "bg-emerald-400/10 text-emerald-400",
    Delayed: "bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs ${
        styles[status] || "bg-white/10 text-gray-400"
      }`}
    >
      {status}
    </span>
  );
}

function Insight({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/10 p-4">
      <div className="flex gap-3">
        <div className="text-lg">{icon}</div>

        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
        </div>
      </div>
    </div>
  );
}