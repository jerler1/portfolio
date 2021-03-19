import React from "react";
import Projects from "../../components/Projects/Projects";
import Works from "./ProjectInfo";
import "./Portfolio.css";
import CardHeader from "../../components/CardHeader/CardHeader";

const Portfolio = () => {
  return (
    <>
      <CardHeader headingName="Portfolio" />
      <div className="container">
        <div className="box">
          <div className="columns">
            <div className="column">
              <img src={Works[0].image} alt={Works[0].alt} />
            </div>
            <div className="column">
              <h1
                className="is-size-2 title mb-1 mr-2"
                style={{ display: "inline-block" }}
              >
                {Works[0].name}
              </h1>
              <span>
                <a
                  className="button mr-2"
                  target="_blank"
                  href={Works[0].github}
                >
                  GitHub Repository
                </a>
                <a className="button" target="_blank" href={Works[0].url}>
                  Website
                </a>
              </span>
              <p>{Works[0].description}</p>
            </div>
          </div>
        </div>
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
