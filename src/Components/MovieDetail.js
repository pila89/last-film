import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'



const Moviedetail = () => {
    const {ID}=useParams()
console.log (ID);
const x =[
    {posterURL:"https://i5.walmartimages.com/asr/9ab25da7-1863-47ec-b256-bef7f0b384d6_1.eff76dd1d07d4d50c798b93b306f5f64.jpeg",title:"Titanic",trailerURL: "https://www.youtube.com/embed/zH0E69gtQtI?autoplay=1",description:"Film 2018",rating:5,id:1},
    {posterURL:"https://fr.web.img5.acsta.net/pictures/21/05/18/10/40/2487837.jpg",trailerURL: "https://www.youtube.com/embed/5MBjAN7jqsQ?autoplay=1",title:"Fast and furious",description:"Film 2019",rating:0,id:2},
    {posterURL:"https://static.kino.de/wp-content/uploads/2010/08/House-of-Gucci-Poster-2021-rcm400x400u.jpg",trailerURL: "https://www.youtube.com/embed/2xb9Ty-1frw?autoplay=1",title:"Film 2020",description:"vampires",rating:0,id:3},
];
const selectedpost = x.find ( x => x.id ==ID );
console.log (selectedpost)
    return (
        <div>
            <iframe
        width="100%"
        height="500"
        src={selectedpost.trailerURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            



           <div>
               
               <h4> {selectedpost.title} </h4>
               <p>{selectedpost.description}</p>
               <span>{selectedpost.rating}</span>
               
              
           </div>
           <div>
           <Link to = { `/`} > <button>Go to Home</button> </Link>
           </div>
      </div>
    )
}
export default Moviedetail
