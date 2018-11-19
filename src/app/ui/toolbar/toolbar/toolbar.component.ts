import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarOptions} from './toolbar-options';
import {ToolbarActions} from './toolbar-actions';
import {ToolbarService} from './toolbar.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<any>;
  options: ToolbarOptions;
  mainAction: ToolbarActions;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.options = new ToolbarOptions('menu', 'Contacts Application');
    this.mainAction = new ToolbarActions(this.onMenuClick.bind(this), 'menu');
    this.menuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe(options => {
      this.options = options;
      console.log('toolbar: options set');
      console.log(JSON.stringify(this.options));
      if (this.options.mode === 'menu') {
        this.mainAction = new ToolbarActions(this.onMenuClick.bind(this), 'menu');
      } else if (this.options.mode === 'back') {
        this.mainAction = new ToolbarActions(this.onNavigateback.bind(this), 'arrow_back');
      }
    });
  }

  onMenuClick() {
    console.log('menu clicked');
    this.menuClick.emit();
  }

  onNavigateback() {
    console.log('Toolbar: Navigated back');
    this.location.back();
  }

}
