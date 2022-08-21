export default function FormInput({ htmlFor, label, type = "text", ...rest }) {
  return (
    <div className="mb-3">
      <label className="block text-sm text-gray-600 mb-1" htmlFor={htmlFor}>
        {label}
      </label>
      <input type={type} id={htmlFor} {...rest} />
    </div>
  );
}
