import { useState } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type?: 'text' | 'password' | 'number';
  value: string;
  onChange: (value: string) => void;
  clearable?: boolean;
  placeholder?: string;
};

export const Input = ({
  type = 'text',
  value,
  onChange,
  clearable = false,
  placeholder,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const actualType =
    type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={styles.wrapper}>
      <input
        type={actualType}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

      {type === 'password' && (
        <button
          className={styles.eye}
          onClick={() => setShowPassword((v) => !v)}
        >
          👁
        </button>
      )}

      {clearable && value && (
        <button
          className={styles.clear}
          onClick={() => onChange('')}
        >
          ✕
        </button>
      )}
    </div>
  );
};
