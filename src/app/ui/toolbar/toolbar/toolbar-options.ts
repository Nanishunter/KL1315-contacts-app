import {ToolbarActions} from './toolbar-actions';

export class ToolbarOptions {
  mode: string;
  // backEnabled: boolean;
  title: string;
  // actions: ToolbarActions[];

  constructor(mode: string, title: string, ) {
    // this.backEnabled = backenabled;
    this.title = title;
    // this.actions = actions;
    this.mode = mode;
  }
}
