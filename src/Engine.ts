import { DataModel, MaturityLevel, Metric } from './model/model';
import { Parser } from './Parser';

export class Engine {
  public static CreateEngineFromFile(path: string) {
    const dataModel = Parser.loadDataModelFromFile(path);
    return new Engine(dataModel);
  }

  public static CreateEngineFromModel(dataModel: DataModel) {
    return new Engine(dataModel);
  }

  public static CreateDefaultDevOpsEngine() {
    const dataModel = Parser.getDefaultDevOpsConfig();
    return new Engine(dataModel);
  }

  private dataModel;

  private constructor(dataModel: DataModel) {
    console.log('Created engine with data model ', dataModel);
    this.dataModel = dataModel;
  }

  public calculateMaturityLevel = (metrics: Array<Metric>): MaturityLevel => {
    console.log('received metrics', metrics);
    return {
      name: 'level one',
      requirements: [{ threshold: 25 }],
      description: 'this is my maturity level test.',
    };
  };

  public setDataModel = (dataModel: DataModel) => {
    console.log('data model updated to ', dataModel);
    this.dataModel = dataModel;
  };

  public getDataModel = () => {
    return { ...this.dataModel };
  };
}
