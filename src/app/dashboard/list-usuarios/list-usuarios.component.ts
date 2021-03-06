import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  listUsuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getUsuarios().subscribe(data => this.listUsuarios = data['data']);
  }

  ngOnInit(): void {

  }

  loading = () => this.listUsuarios.length === 0;

}
