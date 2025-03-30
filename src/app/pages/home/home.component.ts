import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CoursesComponent } from "../courses/courses.component";
import { CourseCardComponent } from "../course-card/course-card.component";
import { CouserDetailComponent } from "../couser-detail/couser-detail.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavbarComponent, CoursesComponent, CourseCardComponent, CouserDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
