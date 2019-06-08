import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit {

  public coracao_vazio: string = '/assets/coracao_vazio.png';
  public coracao_cheio: string = '/assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
