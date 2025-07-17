// src/app/services/car.service.ts
import { Injectable } from '@angular/core';

export class Car {
  constructor(
    public nome: string,
    public preco: number,
    public alturaCacamba: number,
    public alturaVeiculo: number,
    public alturaSolo: number,
    public capacidadeCarga: number,
    public motor: string,
    public potencia: number,
    public volumeCacamba: number,
    public roda: string,
    public image: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carArr: Car[] = [];

  getCars(): Car[] {
    return this.carArr;
  }

  addCar(car: Car): void {
    if (this.carArr.length < 2) {
      this.carArr.push(car);
    } else {
      throw new Error('Você só pode comparar 2 carros por vez');
    }
  }

  removeCar(car: Car): void {
    const index = this.carArr.findIndex((c) => c.nome === car.nome);
    if (index !== -1) {
      this.carArr.splice(index, 1);
    }
  }

  clearCars(): void {
    this.carArr = [];
  }
}

