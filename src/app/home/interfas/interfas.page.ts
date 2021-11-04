import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-interfas',
  templateUrl: './interfas.page.html',
  styleUrls: ['./interfas.page.scss'],
})
export class InterfasPage implements OnInit {
  public interfas: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.interfas = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
