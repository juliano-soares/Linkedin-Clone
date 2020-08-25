import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/juliano-soares.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Juliano Soares</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.01</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">300</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
