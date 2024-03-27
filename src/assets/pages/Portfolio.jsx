import PortfolioCard from '../utils/PortfolioCard'

function Portfolio() {
  return (
        <div
          id="projects"
          className="flex flex-col items-center px-8 text-center pt-14"
          >
          <h2 className="pb-4 text-3xl font-bold">Recent Projects</h2>
          <div className="flex flex-wrap justify-center gap-2 text-white">
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/5-day-forecast.git/"
          image="public/images/total-view-of-city-input.png"
          >
          </PortfolioCard >
        </div>
      </div>
    )
  }

  export default Portfolio;