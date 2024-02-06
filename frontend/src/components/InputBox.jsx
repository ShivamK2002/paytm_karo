export default function InputBox({ label, placeholder, onChange, value }) {
  return (
    <div className="text-sm font-medium text-left py-2">
      {label}
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}
