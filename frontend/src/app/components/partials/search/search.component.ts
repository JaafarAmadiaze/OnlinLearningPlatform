import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(activatedRouter: ActivatedRoute , private route : Router) {
    activatedRouter.params.subscribe(params => {
    if(params['searchTerm']) 
       this.searchTerm = params['searchTerm'];
    });
  }
ngOnInit() : void {}

search(term: string):void {
  if(term)
  this.route.navigate(['/search', term]);

}
}
