import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { RouterLink } from '@angular/router';
import { CommonModule as C } from '@angular/common';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-tags',
  imports: [C, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(courseService :CourseService) {
    courseService.getAllTags().subscribe((ServerTags) => {
  this.tags = ServerTags;  });
  }

  ngOnInit(): void {
  }
 
  activeTag: string = '';
  
  isTagActive(tagName: string): boolean {
    return this.activeTag === tagName;
  }

}
 