import { Component, OnInit } from '@angular/core';
import {FooService} from '../../services/foo.service';
import {Router} from '@angular/router';
import {Foo} from '../../models/foo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  foo: Foo;
  fooName: string;

  constructor(private fooService: FooService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.foo = new Foo(null,this.fooName);
    this.fooService.create(this.foo).subscribe(
      data=> {
        console.log(data);
        this.return();
      },
      err => console.log(err)
    );
  }

  return(): void {
    this.router.navigate(['/list']);
  }

}
