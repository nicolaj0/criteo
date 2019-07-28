import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private users: any;

  constructor(private service: GithubService) {}
  title = 'untitled1';

  ngOnInit(): void {
  this.service.getCommits().subscribe(u => {
    const groups = _.chain(u.items)
      .groupBy((item) => moment(item.updated_at).startOf('day').format())
      .map((messages, date) => ({date, messages}))
      .value()
    console.log(groups);
    this.users = groups;
  });
  }
}
