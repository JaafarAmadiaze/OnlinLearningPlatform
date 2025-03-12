import { Injectable } from '@angular/core';
import { Courses } from '../shared/models/Courses';
import { courses, tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { COURSE_BY_ID_URL, COURSE_SEARCH_URL, COURSE_TAG_SEARCH_URL, COURSE_TAG_URL, COURSES_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Courses[]>{
   return this.http.get<Courses[]>(COURSES_URL);
  }

  getAllCoursesBySearch(searchTerm:string){
    return this.http.get<Courses[]>(COURSE_SEARCH_URL+searchTerm);
  }



    getAllTags():Observable<Tag[]>{
      return this.http.get<Tag[]>(COURSE_TAG_URL);
    }
    getAllCoursesByTag(tagName: string): Observable<Courses[]> {
     return tagName=="All"?
     this.getAll():
     this.http.get<Courses[]>(COURSE_TAG_SEARCH_URL+tagName);
    }

    getCourseById(courseId: number): Observable<Courses> {
      return this.http.get<Courses>(COURSE_BY_ID_URL+ courseId);
    }

}
