import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div style={{width: '100%', margin: 0 }}>
        <SectionTitle style={{fontFamily: 'Yusei Magic', textAlign: 'center'}}>Projects</SectionTitle>
        <ul className="list-margin">
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <img src={project.images[0].resolutions.mobile.url} alt= 'project'/>
              <p style={{fontFamily: 'Josefin Sans'}}>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <ul>
                <li style={{fontFamily: 'Yusei Magic', fontSize: 'Large'}}> <a href={project.githubUrl} target='_blank' rel='noreferrer'>Github Repository</a></li>
                <br></br>
                <li style={{fontFamily: 'Yusei Magic', fontSize: 'Large'}}> <a href={project.website} target='_blank' rel='noreferrer'>Check It Out!</a></li>
              </ul>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;