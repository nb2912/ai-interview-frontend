const stats = [
    { label: 'Users', value: '90+' },
    { label: 'Locations', value: '30+' },
    { label: 'Servers', value: '50+' },
  ]
  
  export default function StatsSection() {
    return (
      <section className="bg-gray-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-6 shadow text-center"
            >
              <div className="text-3xl font-bold text-red-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  