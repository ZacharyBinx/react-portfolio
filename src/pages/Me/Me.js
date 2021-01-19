import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle style={{fontFamily: 'Yusei Magic'}}>About Me</SectionTitle>
        <Paragraph  style={{fontFamily: 'Josefin Sans'}}>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle style={{fontFamily: 'Yusei Magic'}}>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle style={{fontFamily: 'Yusei Magic'}}>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink style={{fontFamily: 'Josefin Sans'}} key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;