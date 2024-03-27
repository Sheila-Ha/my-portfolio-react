function Button({ children }) {
    return (
      <>
        <button className="flex justify-center px-2 py-1 font-bold duration-500 ease-in-out bg-blue-400 border-2 rounded-md hover:bg-white hover:text-blue-400">
          {children}
        </button>
      </>
    )
  }
  
  export default Button;