import { question } from 'readline-sync';
import { Output } from './output';

const bootstrap = () => {
  Output.display();
  while (true) {
    Output.choice(question());
    Output.display();
  }
};

bootstrap();
