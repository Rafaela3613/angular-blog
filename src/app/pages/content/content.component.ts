import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string ="https://portogente.com.br/images/Microsoft_2.jpg"
  contentTitle: string = "Minha noticia"
  contentDescription: string = "Ola mundo"


  constructor() { }

  ngOnInit(): void {
  }

}
