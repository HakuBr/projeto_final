import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../../components/card/card";
import { CarTable } from "../../components/car-table/car-table";
import { DashboardS } from '../../services/dashboard';
import { Veiculo, VinInfos } from '../../models/car';
import { Router } from '@angular/router';
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-dashboard',
  imports: [Card, CarTable, Menu],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css', '../../components/card/card.css'],
})

export class Dashboard implements OnInit{
  dashboardService = inject(DashboardS)
  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }
  
  veiculos: Veiculo[] = []
  veiculoSelecionado: Veiculo = {
    id: -1,
    connected: 0,
    softwareUpdates: 0,
    volumetotal: 0,
    img: "",
    vehicle: "",
    vin: ""
  }

  vinInfos: VinInfos = {
    id: 0,
    odometro: 0,
    nivelCombustivel: 0,
    lat: 0,
    long: 0,
    status: ""
  }

  ngOnInit(): void {
    this.dashboardService.getVeiculos().subscribe({
      error: () => {

      },
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as Veiculo[]
        this.veiculoSelecionado = veiculos[0]

        this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
          error: () => {},
          next: (vinInfos) => {
            this.vinInfos = vinInfos
          }
        })

      }
    })
  }
  

  onChangeSelect(event: Event){
    const id = Number((event.target as HTMLSelectElement).value)
    const veiculo = this.veiculos.find((v) => v.id === id)

    if(veiculo){
      this.veiculoSelecionado = veiculo
    }
    this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
      error: () => {},
      next: (vinInfos) => {
        this.vinInfos = vinInfos
      }
    })
  }
  carregarDashboard() {
    this.dashboardService.getVeiculos().subscribe({
      next: (veiculos) => {
        this.veiculos = veiculos;
        this.veiculoSelecionado = veiculos[0];
  
        this.dashboardService.getVinInfos(this.veiculoSelecionado.vin).subscribe({
          next: (vinInfos) => {
            this.vinInfos = vinInfos;
          }
        });
      }
    });
  }
}
