const Input = ({ children, className, ...props }: any) => {
  return (
    <input
      className={
        className +
        "w-full px-4 py-2 border-2 border-brown-3 rounded-lg bg-brown-2 text-white placeholder-white shadow-none outline-none"
      }
      {...props}
    />
  );
};

export default Input;
