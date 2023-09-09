export default function Button({ children, className, ...rest }: any) {
  return (
    <button
      className={
        className +
        " uppercase rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-4 py-1 w-full cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold disabled:opacity-60 disabled:pointer-events-none"
      }
      {...rest}
    >
      {children}
    </button>
  );
}
