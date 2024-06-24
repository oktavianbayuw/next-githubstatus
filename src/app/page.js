// app/page.js
import StatusTable from './components/StatusTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">GitHub Status Dashboard</h1>
        <StatusTable />
      </main>
    </div>
  );
}
