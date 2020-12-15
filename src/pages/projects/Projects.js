import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../../store/projects';
import { getProjectsInfos } from '../../store/projects';
import  ApiCall  from '../../App.service';
import './Projects.scss';

export const Projects = () => {

  const dispatch = useDispatch();
  const [dataState, setDataState] = useState([]);

  const projectsStore = useSelector(getProjectsInfos);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const setStore = () => {
      return new Promise(resolve => {
        const apiCall = new ApiCall();
        apiCall.getProjects().then(projects => {
          dispatch(
            setProjects(projects)
          )
          setDataState(projectsStore.projects);
          console.log(projectsStore);
        })
      });
    } 

    let store = await setStore();
    
    console.log(projectsStore);
  };

  return (
    <div id="projects">
        <ul>
          {
            projectsStore.projects.map(elem => {
            return <li>
              <Link to={elem.name}>
                <div className="project_container">
                  <div>
                    <h4 className="light_uppercase">{elem.categories}</h4>
                    <h3 className="semiBold_title">{elem.name}</h3>
                    <p className="basic_text">{elem.subTitle}</p>
                    <span className="thin">Reading Time: {elem.readTime} min</span>
                  </div>
                  <div className="imgSelect_container">
                    <img src={elem.img} alt="project" />
                  </div>
                </div>
              </Link>
              </li>
            })
          } 
        <li className="other">
          <h4>Other projects soon to come…</h4>
        </li>
          
        </ul>
    </div>
  );
}
  
export default Projects;