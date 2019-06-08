import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracao_vazio: string = '/assets/coracao_vazio.png';
  public coracao_cheio: string = '/assets/coracao_cheio.png';

  constructor() { }

  ngOnInit() {
  }

}
