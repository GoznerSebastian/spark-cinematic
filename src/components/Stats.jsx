const stats = [
    { name: 'Projects Delivered', value: '120' },
    { name: 'Average Video Length', value: '5', unit: 'mins' },
    { name: 'Clients Served', value: '50+' },
    { name: 'Satisfaction Rate', value: '99%' },
]

export default function Stats() {
    return (
        <div className="bg-gray-900 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Our Achievements
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                        Here are some key statistics that reflect our dedication to delivering top-notch video content.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-gray-800 px-6 py-8 sm:px-8 lg:px-10">
                            <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                                {stat.unit ? <span className="text-lg text-gray-400">{stat.unit}</span> : null}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
