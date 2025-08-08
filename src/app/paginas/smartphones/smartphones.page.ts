import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../../services/smartphone.service'; // Caminho corrigido
import { Smartphone } from '../../models/smartphone.model'; // Caminho corrigido

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.page.html',
  styleUrls: ['./smartphones.page.scss'],
  standalone: false,
})
export class SmartphonesPage implements OnInit {
  smartphones: Smartphone[] = [];
  smartphonesFiltrados: Smartphone[] = [];
  segmentoSelecionado: 'todos' | 'linha-a' | 'linha-reno' = 'todos';
  termoBusca: string = '';

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe((data: Smartphone[]) => { // Tipagem explícita
      this.smartphones = data;
      this.filtrarSmartphones();
    });
  }

  filtrarSmartphones() {
    let tempSmartphones = this.smartphones;

    if (this.segmentoSelecionado !== 'todos') {
      tempSmartphones = tempSmartphones.filter(s => s.linha === this.segmentoSelecionado);
    }

    if (this.termoBusca) {
      const termo = this.termoBusca.toLowerCase();
      tempSmartphones = tempSmartphones.filter(s =>
        s.nome.toLowerCase().includes(termo) ||
        s.subtitulo.toLowerCase().includes(termo) ||
        s.diferencial.toLowerCase().includes(termo) ||
        s.processador.toLowerCase().includes(termo)
      );
    }
    this.smartphonesFiltrados = tempSmartphones;
  }

  segmentChanged(event: any) {
    this.segmentoSelecionado = event.detail.value;
    this.filtrarSmartphones();
  }

  onSearchChange() {
    this.filtrarSmartphones();
  }
}