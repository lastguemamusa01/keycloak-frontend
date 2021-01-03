import { Component, OnInit } from '@angular/core';
import {FooService} from '../../services/foo.service';
import {Foo} from '../../models/foo';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  foos: Foo[] = [];
  isAdmin: boolean;

  constructor(private fooService: FooService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadFoos();
    this.isAdmin = this.loginService.getIsAdmin();
  }

  loadFoos(): void {
    this.fooService.list().subscribe(
      data => {
        this.foos = data;
      },
      err => console.log(err)
    );
  }

  onDelete(id: number): void {
    this.fooService.delete(id).subscribe(
      data => {
        console.log(data);
        this.loadFoos();
      },
      err => console.log(err)
    );
  }

}
