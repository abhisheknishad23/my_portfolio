import React from "react";
import projectss from "./data/projectss.json";

const ProjectsComponent = () => {
  return (
    <>
      <div className="container projectss my-3" id="projectss">
        <h1>PROJECTS</h1>
        <div className= "projectss-pr">
          {projectss.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-sm-3 col-md-3 col-lg-3 mx-3">
              
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    height:"380px",
                    border: "1px solid yellow",
                    margin:"20px",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        margin: "15PX",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary">
                      Demo 
                    </a>
                    <a href={data.source} className="btn btn-warning">
                        Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;

