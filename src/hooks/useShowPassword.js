import  { useCallback, useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  return { showPassword, handleClick };
};
export default useShowPassword;
