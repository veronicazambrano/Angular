import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  cursos = [
    { titulo: "Desarrollo Web Profesional", descripcion: "Domina HTML, CSS y JavaScript", nivel: "Principiante", precio: 49.99, imagen: "/assets/web.jpg" },
    { titulo: "Data Science con Python", descripcion: "Análisis de datos y Machine Learning", nivel: "Intermedio", precio: 79.99, imagen: "/assets/data.jpg" },
    { titulo: "Marketing Digital", descripcion: "Estrategias de redes sociales y SEO", nivel: "Avanzado", precio: 99.99, imagen: "/assets/marketing.jpg" }
  ];

}
