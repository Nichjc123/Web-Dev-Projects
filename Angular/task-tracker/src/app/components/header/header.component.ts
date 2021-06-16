import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'task-tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggled');
  }
}
