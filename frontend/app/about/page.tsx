export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="font-semibold text-blue-600">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-extrabold">
          About Dispatcch
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-500">
          Dispatcch is a logistics platform designed to make transportation,
          delivery and shipment tracking simple for individuals and
          businesses.
        </p>

        <div className="mt-12 rounded-3xl bg-[#07152f] p-10 text-white">
          <h2 className="text-3xl font-bold">
            Moving India forward.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            From small parcels to larger shipments, Dispatch helps
            customers manage their deliveries through one platform.
          </p>
        </div>
      </div>
    </main>
  );
}