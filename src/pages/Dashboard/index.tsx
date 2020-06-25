import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/27226569?s=460&u=8041c767a7f9cf9d937d2ba8d3cce163b778b1a9&v=4"
            alt="Avatar"
          />
          <div>
            <strong>cleberbonifacio/nodeexpert</strong>
            <p>Repositório de Node</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/27226569?s=460&u=8041c767a7f9cf9d937d2ba8d3cce163b778b1a9&v=4"
            alt="Avatar"
          />
          <div>
            <strong>cleberbonifacio/nodeexpert</strong>
            <p>Repositório de Node</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/27226569?s=460&u=8041c767a7f9cf9d937d2ba8d3cce163b778b1a9&v=4"
            alt="Avatar"
          />
          <div>
            <strong>cleberbonifacio/nodeexpert</strong>
            <p>Repositório de Node</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
