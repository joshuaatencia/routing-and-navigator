import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() user: any;

  imgUrl: string;
  firstName: string;
  email: string;

  constructor(private router: Router, private stateService: StateServiceService) {
  }

  ngOnInit(): void {
    this.imgUrl = this.user.picture
    this.firstName = this.user.firstName;
    this.email = this.user.email;
    console.log(this.user);
  }

  gonnaUser():void {
    this.stateService.user = this.user;
    this.router.navigate(['/dashboard/usuario']);
  }

}
