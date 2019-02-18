import {ToolbarActions} from './toolbar-actions';

export class ToolbarOptions {
  mode: string;
  // backEnabled: boolean;
  title: string;
  // actions: ToolbarActions[];

  constructor(mode: string, title: string, ) {
    this.title = title;
    this.mode = mode;
  }
}
