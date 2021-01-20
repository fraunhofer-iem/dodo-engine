import { MaturityLevel, Metric } from './model/model';

export const calculateMaturityLevel = (
  metrics: Array<Metric>,
): MaturityLevel => {
  console.log('received metrics', metrics);
  return {
    name: 'level one',
    requirements: [{ threshold: 25 }],
    description: 'this is my maturity level test.',
  };
};
