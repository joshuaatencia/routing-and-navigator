import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: any;

  constructor(private stateService: StateServiceService) {
    if (this.stateService.user != null) {

      this.user = this.stateService.user;
    }
  }

  ngOnInit(): void {
  }

}
