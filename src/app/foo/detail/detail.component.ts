import { Component, OnInit } from '@angular/core';
import {Foo} from '../../models/foo';
import {FooService} from '../../services/foo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

  return(): void {
    this.router.navigate(['/list']);
  }

}
