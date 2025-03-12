import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  @Input() 
  visible=false;
  @Input()
  notFoundMessage ="Not Found";

  @Input()
  resetLinkText="Reset";
  @Input()
  resetLinkRoute="/";
  
  constructor() {}
  ngOnInit() {}

}
