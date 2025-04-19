export default function HeatSlider({ value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-sm text-gray-600 mt-1">{value.toFixed(1)}</div>
    </div>
  );
}
