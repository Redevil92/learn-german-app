export default function BaseInput({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}: {
  value: string | number;
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          type={type}
          value={value}
          name={name}
          className="form-control"
          placeholder={placeholder ? placeholder : ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
