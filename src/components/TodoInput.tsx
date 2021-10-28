import React, { useState } from 'react';

const TodoInput: React.FC = () => {
  const todo = useFormInput('');

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="할일을 입력하세요."
        {...todo}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        추가
      </button>
    </div>
  );
};

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
};

export default TodoInput;
