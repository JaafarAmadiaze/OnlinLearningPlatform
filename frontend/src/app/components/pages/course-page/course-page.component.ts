import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Courses } from '../../../shared/models/Courses';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule,  NotFoundComponent, RouterLink],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent implements OnInit {
  course: Courses | null = null; // Initialize as null to handle missing courses

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params['id'];
      if (courseId) {
        console.log('Fetching course with ID:', courseId); // Debugging
        this.courseService.getCourseById(courseId).subscribe(
          (serverCourse) => {
            this.course = serverCourse;
            console.log('Course data:', this.course); // Debugging
          },
          (error) => {
            console.error('Error fetching course:', error); // Debugging
          }
        );
      } else {
        console.error('Course ID is missing'); // Debugging
      }
    });
  }

  addToCart() {
    if (this.course) {
      this.cartService.addToCart(this.course);
      this.router.navigate(['/cart-page']);
    } else {
      console.error('Cannot add to cart: Course is not available');
    }
  }
}