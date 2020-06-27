import { h } from '@stencil/core';
import { sample } from '../../../utils';

export default (response: Response) => (
  <main class="Error full-screen">
    <div>{ sample(appropriateEmoji) }</div>
    <h1>{ getHelpfulTitle(response) }</h1>
    <p>{ getHelpfulMessage(response) }</p>
  </main>
);

const getHelpfulTitle = (response: Response) => {
  switch (response.status) {
    case 404:
      return 'Não encontrado';
    default:
      return 'Ops';
  }
};

const getHelpfulMessage = (response: Response) => {
  switch (response.status) {
    case 404:
      return 'Ué, não consegui encontrar essa página';
    default:
      return 'Ops, algo deu errado';
  }
};

const appropriateEmoji = [
  '😕',
  '😟',
  '😑',
  '😧',
  '😯',
  '😮',
  '🙃',
  '🤕',
  '😫'
];
