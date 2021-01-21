import { DataModel } from './model/model';
import defaultDevOps from './dataModel/DefaultDevOps.json';

export class Parser {
  private static devOpsDataModel: DataModel;
  static getDefaultDevOpsConfig = (): DataModel => {
    if (!Parser.devOpsDataModel) {
      Parser.devOpsDataModel = Parser.jsonToDataModel(defaultDevOps);
    }
    return Parser.devOpsDataModel;
  };

  static jsonToDataModel = (json: any): DataModel => {
    // TODO: add validation !!
    return json;
  };

  static loadDataModelFromFile = (path: string): DataModel => {
    console.log('loading data model from file at ', path);
    return {
      metrics: [],
      maturityLevel: [],
      actions: [],
      goals: [],
    };
  };
}
