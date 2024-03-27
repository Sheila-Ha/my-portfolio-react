function Button({ children }) {
    return (
      <>
        <button className="flex justify-center px-4 py-1 font-bold duration-500 ease-in-out border-2 rounded-md bg-slate-700/90 hover:bg-white hover:text-slate-800">
          {children}
        </button>
      </>
    )
  }
  
  export default Button;