import { useState } from "react";

export const useForm = (initForm = {}) => {
  const [formState, setFormState] = useState(initForm);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initForm);
  };

 
  return {
    formState,
    handleInputChange,
    handleReset,
  };
};
