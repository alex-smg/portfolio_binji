import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectsInfos } from '../../store/projects';
import { setProjects } from '../../store/projects';
import { useDispatch, useSelector } from 'react-redux';
import  ApiCall  from '../../App.service';
import arrow from '../../img/arrow.svg'
import './SelectProject.scss'

const SelectProject = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const projectsStore = useSelector(getProjectsInfos);
    const [projectState, setProjectState] = useState();

    useEffect(() => {
      console.log(projectsStore);
      if ( projectsStore.projects.length <= 0 ) {
        console.log('test');
        setStore();
      }
    }, [])

    useEffect(() => {
      getProject();
    }, [projectsStore])

    const getProject = () => {
      const project = projectsStore.projects.find(elem => elem.name === id);
      setProjectState(project);
    }

    const setStore = () => {
      return new Promise(resolve => {
        const apiCall = new ApiCall();
        apiCall.getProjects().then(projects => {
          dispatch(
            setProjects(projects)
          )
          resolve(projects)
        })
      });
    } 

    return (
      <div id="selectProject">
        {
          projectState && <div>
            <div className="selectProject_title">
              <div>
                <Link to="projects">
                  <img src={arrow} alt="arrow back" />
                </Link>
                <h2>{projectState.name}</h2>
              </div>
            </div>
            <div className="selectProject_subTitle">
              <span className="light_uppercase">{projectState.subTitle}</span>
              <span className="thin">{projectState.name + ' • reading time : ' + projectState.readTime}</span>
            </div>
            <div className="selectProject_img_mobile">
              <img src={projectState.imgSelect} alt="img project"/>
            </div>
            <div className="selectProject_buttons_mobile">
              {
                projectState.buttons && projectState.buttons.map(button => {
                  return <a className={'btn_primary ' + button.css } href={button.link}>{button.title}</a>
                })
              }
            </div>
            <div className="selectProject_text">
              {
                projectState.sections && projectState.sections.map(section => {
                  return <div>
                    <h3>{section.title}</h3>
                    <p className="bloc_text_mobile">{section.text}</p>
                  </div>
                })
              }
            </div>
            <div className="selectProject_buttons_desktop">
              {
                projectState.buttons && projectState.buttons.map(button => {
                  return <a className={'btn_primary ' + button.css } href={button.link}>{button.title}</a>
                })
              }
            </div>
            <div className="selectProject_img_desktop">
              <img src={projectState.imgSelect} alt="img project"/>
            </div>
          </div>
        }
      </div>
    );
  }
  
export default SelectProject;