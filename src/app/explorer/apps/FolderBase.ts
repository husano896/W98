export class Folder implements IFolderBase {
  name: string;
  icon?: string;
  apps: Array<any>;
  // 記得apps裡面可以包其他Folder！
}

export interface IFolderBase {
  name: string;
  icon?: string;
  apps: Array<any>;
}
