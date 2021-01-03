import { Component, OnInit } from '@angular/core';
import {FooService} from '../../services/foo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Foo} from '../../models/foo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  foo: Foo;

  constructor(private fooService: FooService, private activatedRouted: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params.id;
    this.fooService.detail(id).subscribe(
      data => {
        this.foo = data;
      },
      err => console.log(err)
    );
  }

  onUpdate(): void {
    const id = this.activatedRouted.snapshot.params.id;
    this.fooService.update(id,this.foo).subscribe(
      data => {
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
