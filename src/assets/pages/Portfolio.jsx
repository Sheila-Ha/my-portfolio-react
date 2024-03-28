import PortfolioCard from '../utils/PortfolioCard'

function Portfolio() {
  return (
        <div
        id="projects"
        
          >
          <h2>Recent Projects</h2>
          <p className="flex flex-wrap justify-center gap-2 pb-4 font-bold text-slate-800 text-3x1">Click on an image below to go to Github</p>
          <div className="flex flex-wrap justify-center gap-2 text-white">
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/5-day-forecast.git/"
          image="public/images/weather.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/food-and-recipe/"
          image="public/images/food_recipes.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/orm-ecom-back-end.git"
          image="public/images/ORM.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/mvc-tech-blog.git"
          image="public/images/MVC.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/code-quiz.git"
          image="public/images/code_quiz.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/scheduler.git"
          image="public/images/scheduler.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/Portfolio.git"
          image="public/images/1stPortfolio.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/sql-tracker.git"
          image="public/images/sql_tracker.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/Group4-Poll-Meet-Up.git"
          image="public/images/pollcreated.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/Social-Network-API.git"
          image="public/images/SN_API.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/note-taker.git"
          image="public/images/note_taker.png"
          >
          </PortfolioCard >
          <PortfolioCard 
          link="https://github.com/Sheila-Ha/my-portfolio-react.git"
          image="public/images/Portfolio_home.png"
          >
          </PortfolioCard >
        </div>
      </div>
    )
  }

  export default Portfolio;