import Carousel from "./Carousel";
import PastProjects from "./PastProjects";
export default function App() {
  return (
    <div className="p-6">

      <Carousel>

        <div className="featured-container">

          <PastProjects projecttitle='CALCULATOR APP' />


        </div>

       
        <div className="featured-container">
         <PastProjects projecttitle ='Weather App' />
        </div>

<div>
         <div className="featured-container">
         <PastProjects projecttitle ='Task Management App' />
        </div>
          

        </div>


      </Carousel>
    </div>
  );
}
