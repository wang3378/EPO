import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  unit?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ id, label, value, onChange, placeholder, unit }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="number"
          name={id}
          id={id}
          className="block w-full rounded-md border-slate-300 py-3 pl-3 pr-12 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all"
          placeholder={placeholder}
          step="0.01"
          min="0"
          value={value}
          onChange={onChange}
        />
        {unit && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-slate-500 sm:text-sm">{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
};