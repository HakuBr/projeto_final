import { Component, inject, OnInit } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Copy } from "../../components/copy/copy";

@Component({
  selector: 'app-lancamento',
  imports: [Menu, CommonModule],
  templateUrl: './lancamento.html',
  providers: [CurrencyPipe],
  styleUrl: './lancamento.css'
})
export class Lancamento implements OnInit {
  router = inject(Router)

  cars = [
    new Car(
      'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      183850,
      511,
      1821,
      232,
      1234,
      '2.2 Diesel',
      160,
      1420,
      'Aço Estampado 16',
      'img/XL Cabine.jpg'
    ),
    new Car(
      'XLS 2.2 Diesel 4X4 AT 2022',
      220690,
      511,
      1821,
      232,
      1076,
      '2.2 Diesel',
      160,
      1180,
      'Aço Estampado 16',
      'img/xls 2.2 diesel.jpg'
    ),
    new Car(
      'Storm 3.2 Diesel 4X4 AT 2022',
      222790,
      511,
      1821,
      232,
      1040,
      '3.2 Diesel',
      200,
      1180,
      'Liga Leve 17',
      'img/storm.jpg'
    ),
  ];

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }

  
  
    carArr: Car[] = [];
    showComparison = false;
  
    constructor(private carService: CarService) {}
  
    ngOnInit() {
      this.carArr = this.carService.getCars();
    }
  
    setCarToCompare(event: any, car: Car): void {
      if (event.target.checked) {
        try {
          this.carService.addCar(car);
        } catch (error:any) {
          event.target.checked = false;
          alert(error.message);
        }
      } else {
        this.carService.removeCar(car);
      }
    }
  
    showCompare(): void {
      if (this.carArr.length < 2) {
        alert('Precisa marcar 2 carros para apresentar a comparação');
      } else {
        this.showComparison = true;
      }
    }
  
    hideCompare(): void {
      this.showComparison = false;
    }
  
    updateCompareTable(): void {
      this.carArr = this.carService.getCars();
    }
  }
  
