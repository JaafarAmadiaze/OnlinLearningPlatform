import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../../../shared/models/Courses';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses: Courses[] = [];

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {
    let coursesObservable : Observable<Courses[]> 
    this.activatedRoute.params.subscribe(params => {
      if (params['searchTerm']) {
        coursesObservable = this.courseService.getAllCoursesBySearch(params['searchTerm']);
      } else if (params['tagName']) {
        coursesObservable = this.courseService.getAllCoursesByTag(params['tagName']);
      } else {
        coursesObservable = this.courseService.getAll();
      }

      coursesObservable.subscribe(ServerCourses => {
        this.courses = ServerCourses;
      }
      );
    }
    );
  }
}