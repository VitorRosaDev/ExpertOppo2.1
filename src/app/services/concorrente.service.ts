import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interface para os dados do concorrente, garantindo que as chaves correspondam
export interface Concorrente {
  nome: string;
  memoriaRam: string;
  memoriaRom: string;
  processador: string;
  tela: string;
  cameraTraseira: string;
  cameraFrontal: string;
  bateria: string;
  som: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConcorrenteService {

  // Dados dos smartphones concorrentes
  private concorrentesData: Concorrente[] = [
    {
      nome: 'Samsung A15',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Helio G99',
      tela: '6.5” | 90Hz',
      cameraFrontal: '13MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Motorola G15',
      memoriaRam: '12GB (4+8)',
      memoriaRom: '256GB',
      processador: 'MediaTek Helio G81',
      tela: '6.72” | 60Hz',
      cameraFrontal: '8MP',
      cameraTraseira: '50MP',
      bateria: '5200mAh, 20W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A16',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Helio G99 MediaTek',
      tela: '6.7” | 90Hz',
      cameraFrontal: '13MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Motorola G35',
      memoriaRam: '12GB (4+8)',
      memoriaRom: '256GB',
      processador: 'Unisoc T760',
      tela: '6.7” | 120Hz',
      cameraFrontal: '16MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 20W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A55',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Exynos 1480',
      tela: '6.6” | 120Hz',
      cameraFrontal: '32MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Motorola Edge 50 Fusion',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Snapdragon 6 Gen 1',
      tela: '6.7” | 120Hz',
      cameraFrontal: '32MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 68W',
      som: '100% volume',
    },
    {
      nome: 'Samsung S24 FE',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Exynos 2400e',
      tela: '6.7” | 120Hz',
      cameraFrontal: '10MP',
      cameraTraseira: '50MP',
      bateria: '4700mAh, 25W',
      som: '100% volume',
    },
    {
      nome: 'Motorola Edge 50 NEO',
      memoriaRam: '8GB',
      memoriaRom: '256GB',
      processador: 'Dimensity 7300',
      tela: '6.4” | 120Hz',
      cameraFrontal: '32MP',
      cameraTraseira: '50MP',
      bateria: '4310mAh, 68W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A06',
      memoriaRam: '8GB (4+4)',
      memoriaRom: '128GB',
      processador: 'MediaTek Helio G85',
      tela: '6.6” | 60Hz',
      cameraFrontal: '8MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A26',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Exynos 1280',
      tela: '6.6” | 120Hz',
      cameraFrontal: '8MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 25W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A36',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Snapdragon 6 Gen 3',
      tela: '6.7” | 120Hz',
      cameraFrontal: '12MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Samsung A56',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Exynos 1580',
      tela: '6.7” | 120Hz',
      cameraFrontal: '12MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 15W',
      som: '100% volume',
    },
    {
      nome: 'Samsung S24',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Exynos 2400',
      tela: '6.2” | 120Hz',
      cameraFrontal: '12MP',
      cameraTraseira: '50MP',
      bateria: '4000mAh, 25W',
      som: '100% volume',
    },
    {
      nome: 'Samsung S25',
      memoriaRam: '12GB',
      memoriaRom: '256GB / 512GB',
      processador: 'Snapdragon 8 Elite for Galaxy',
      tela: '6.3” | 120Hz',
      cameraFrontal: '12MP',
      cameraTraseira: '50MP',
      bateria: '4000mAh, 25W',
      som: '100% volume',
    },
    {
      nome: 'Motorola G05',
      memoriaRam: '8GB (4+4)',
      memoriaRom: '128GB',
      processador: 'MediaTek Helio G81',
      tela: '6.67” | 90Hz',
      cameraFrontal: '8MP',
      cameraTraseira: '50MP',
      bateria: '5200mAh, 10W',
      som: '100% volume',
    },
    {
      nome: 'Motorola G75',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Snapdragon 6 Gen 3',
      tela: '6.78” | 120Hz',
      cameraFrontal: '16MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 33W',
      som: '100% volume',
    },
    {
      nome: 'Motorola G56',
      memoriaRam: '8GB',
      memoriaRom: '128GB / 256GB',
      processador: 'MediaTek Dimensity 7060',
      tela: '6.72” | 120Hz',
      cameraFrontal: '16MP',
      cameraTraseira: '50MP',
      bateria: '5000mAh, 30W',
      som: '100% volume',
    },
    {
      nome: 'Motorola Edge 60 Fusion',
      memoriaRam: '16GB (8+8)',
      memoriaRom: '256GB',
      processador: 'Dimensity 7300',
      tela: '6.7” | 120Hz',
      cameraFrontal: '32MP',
      cameraTraseira: '50MP',
      bateria: '5200mAh, 68W',
      som: '100% volume',
    },
    {
      nome: 'Motorola Edge 60 Pro',
      memoriaRam: '12GB',
      memoriaRom: '512GB',
      processador: 'MediaTek Dimensity 8350',
      tela: '6.7” | 120Hz',
      cameraFrontal: '50MP',
      cameraTraseira: '50MP',
      bateria: '6000mAh, 90W',
      som: '100% volume',
    }
  ];

  constructor() { }

  getConcorrentes(): Observable<Concorrente[]> {
    // Retorna a lista de concorrentes como um Observable
    return of(this.concorrentesData);
  }
}
