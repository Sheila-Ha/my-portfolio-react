

function PortfolioCard({ link, image }) {
  return (
    <div className="border-slate-700 border-2 relative group rounded-lg h-[200px] w-[300px] z-0">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="Project Image"
          className="w-full h-full rounded-md"
        />
      </a>
    </div>
  )
}

export default PortfolioCard;