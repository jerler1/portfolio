import React from "react";
import Projects from "../../components/Projects/Projects";
import works from "./ProjectInfo";
import "./Portfolio.css";
import CardHeader from "../../components/CardHeader/CardHeader";

const Portfolio = () => {
  return (
    <>
      <CardHeader headingName="Portfolio" />
      <header>
        <h1 className="has-text-centered is-size-3 my-4">My Recent Work</h1>
      </header>
      <div className="columns is-flex is-multiline gridContainer m-0 has-text-center">
        {works.map((project) => {
          return (
            <div className="column is-half-tablet is-one-third-desktop">
              <figure key={project.id}>
                <img
                  src={project.image}
                  alt={project.alt}
                  key={project.id}                
                  className="projectImage"
                />
              </figure>
              <figcaption>
                {project.name}
              </figcaption>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;

// import React from "react";
// import Projects from "../../components/Projects/Projects";
// import Works from "./ProjectInfo";
// import "./Portfolio.css";
// import CardHeader from "../../components/CardHeader/CardHeader";

// const Portfolio = () => {
//   return (
//     <>
//       <CardHeader headingName="Portfolio" />
//       <div className="container">
//         <div className="box">
//           <div className="columns">
//             <div className="column">
//               <img src={Works[0].image} alt={Works[0].alt} />
//             </div>
//             <div className="column">
//               <h1
//                 className="is-size-2 title mb-1 mr-2"
//                 style={{ display: "inline-block" }}
//               >
//                 {Works[0].name}
//               </h1>
//               <span>
//                 <a
//                   className="button mr-2"
//                   target="_blank"
//                   href={Works[0].github}
//                 >
//                   GitHub Repository
//                 </a>
//                 <a className="button" target="_blank" href={Works[0].url}>
//                   Website
//                 </a>
//               </span>
//               <p>{Works[0].description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
