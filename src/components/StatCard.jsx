export default function StatCard({ number, label, icon }) {
  return (
    <div className="text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <div className="text-5xl md:text-6xl font-bold text-tcrufc-gold mb-2">
        {number}
      </div>
      <div className="text-white text-lg md:text-xl font-medium">
        {label}
      </div>
    </div>
  )
}
