export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="font-semibold text-blue-600">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-extrabold">
          Logistics for Business
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-500">
          Manage deliveries, shipments and logistics from one platform.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Shipment Management</h2>
            <p className="mt-3 text-gray-500">
              Manage your business shipments easily.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Live Tracking</h2>
            <p className="mt-3 text-gray-500">
              Keep track of every delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Business Dashboard</h2>
            <p className="mt-3 text-gray-500">
              Keep your logistics organized.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}