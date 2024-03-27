import Button from './Button'

function PortfolioCard({ children, link, image }) {
  return (
    <div className="border--cyan-700 border-2 relative group rounded-lg h-[200px] w-[300px] z-0">
      <img
        src={image}
        alt="Project Image"
        className="w-full h-full rounded-md"
      />
      <div className="absolute bottom-0 flex flex-col items-center justify-end w-full h-full pb-8 duration-500 ease-in-out bg-orange-400 rounded-md opacity-0 group-hover:opacity-100">
        <p className="pb-2 font-medium">{children}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <Button>View</Button>
        </a>
      </div>
    </div>
  )
}

export default PortfolioCard;