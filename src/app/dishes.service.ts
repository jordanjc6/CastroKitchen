import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from './dish.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<any> {
    return this.http.get('http://localhost:3000/dishes');
  }

  query(cuisine: string): Observable<any> {
    return this.http.get(`http://localhost:3000/dishes/query/${cuisine}`);
  }

  postDish(dish: Dish) {
    return this.http.post('http://localhost:3000/dishes', dish).subscribe(data =>{
    });
  }

  updateDish(dish: Dish) {
    return this.http.post(`http://localhost:3000/dishes/update/${dish.id}`, dish);
  } 

  deleteDish(dish: Dish) {
    return this.http.post(`http://localhost:3000/dishes/delete/${dish.id}`, null);
  }

}
