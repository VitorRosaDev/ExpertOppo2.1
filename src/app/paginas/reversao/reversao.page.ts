import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SmartphoneService } from '../../services/smartphone.service';
import { ConcorrenteService, Concorrente } from '../../services/concorrente.service';
import { Smartphone } from '../../models/smartphone.model';

// Interface para os atributos que serão comparados
interface ComparativoAtributo {
  label: string;
  key: keyof (Smartphone | Concorrente);
}

// Interface para um grupo de comparativo (OPPO + Concorrentes)
interface ComparativoGrupo {
  modelo: string;
  codigo: string;
  dispositivos: (Smartphone | Concorrente)[];
}

@Component({
  selector: 'app-reversao',
  templateUrl: './reversao.page.html',
  styleUrls: ['./reversao.page.scss'],
  standalone: false,
})
export class ReversaoPage implements OnInit {

  atributos: ComparativoAtributo[] = [
    { label: 'Memória RAM', key: 'memoriaRam' },
    { label: 'Memória ROM', key: 'memoriaRom' },
    { label: 'Processador', key: 'processador' },
    { label: 'Tela', key: 'tela' },
    { label: 'Câmera Traseira', key: 'cameraTraseira' },
    { label: 'Câmera Frontal', key: 'cameraFrontal' },
    { label: 'Bateria', key: 'bateria' },
    { label: 'Som', key: 'som' },
  ];

  todosComparativos: ComparativoGrupo[] = [];
  oppoSmartphones: Smartphone[] = [];
  concorrentesData: Concorrente[] = [];
  comparativosFiltrados: ComparativoGrupo[] = [];
  
  buscaRealizada: boolean = false; 

  termoBuscaOppo: string = '';
  termoBuscaConcorrente: string = '';

  // Variáveis para a pesquisa preditiva
  sugestoesOppo: Smartphone[] = [];
  sugestoesConcorrente: Concorrente[] = [];

  constructor(
    private smartphoneService: SmartphoneService,
    private concorrenteService: ConcorrenteService
  ) { }

  ngOnInit() {
    this.carregarDadosIniciais();
  }

  carregarDadosIniciais() {
    forkJoin({
      oppoSmartphones: this.smartphoneService.getSmartphones(),
      concorrentesData: this.concorrenteService.getConcorrentes()
    }).subscribe(({ oppoSmartphones, concorrentesData }) => {
      this.oppoSmartphones = oppoSmartphones;
      this.concorrentesData = concorrentesData;
    });
  }

  // Método para pesquisa preditiva em tempo real
  onSearchChange(event: any, tipo: 'oppo' | 'concorrente') {
    const termo = event.target.value.toLowerCase().trim();

    if (termo.length > 0) {
      if (tipo === 'oppo') {
        this.sugestoesOppo = this.oppoSmartphones.filter(d => d.nome.toLowerCase().includes(termo));
        this.sugestoesConcorrente = [];
      } else {
        this.sugestoesConcorrente = this.concorrentesData.filter(c => c.nome.toLowerCase().includes(termo));
        this.sugestoesOppo = [];
      }
    } else {
      if (tipo === 'oppo') {
        this.sugestoesOppo = [];
      } else {
        this.sugestoesConcorrente = [];
      }
    }
  }

  // Método para selecionar uma sugestão e preencher o campo
  selecionarSugestao(tipo: 'oppo' | 'concorrente', nome: string) {
    if (tipo === 'oppo') {
      this.termoBuscaOppo = nome;
      this.sugestoesOppo = [];
    } else {
      this.termoBuscaConcorrente = nome;
      this.sugestoesConcorrente = [];
    }
  }

  filtrarComparativos() {
    this.buscaRealizada = true;
    this.comparativosFiltrados = [];

    const termoOppo = this.termoBuscaOppo.toLowerCase().trim();
    const termoConcorrente = this.termoBuscaConcorrente.toLowerCase().trim();

    if (!termoOppo || !termoConcorrente) {
        return;
    }

    const oppo = this.oppoSmartphones.find(d => d.nome.toLowerCase() === termoOppo);
    const concorrente = this.concorrentesData.find(c => c.nome.toLowerCase() === termoConcorrente);

    if (oppo && concorrente) {
        const dispositivosParaComparar: (Smartphone | Concorrente)[] = [oppo, concorrente];
        this.comparativosFiltrados = [{
            modelo: oppo.nome,
            codigo: 'Não disponível',
            dispositivos: dispositivosParaComparar.filter(Boolean) as (Smartphone | Concorrente)[]
        }];
    }
  }

  limparPesquisa() {
    this.termoBuscaOppo = '';
    this.termoBuscaConcorrente = '';
    this.sugestoesOppo = [];
    this.sugestoesConcorrente = [];
    this.buscaRealizada = false;
    this.comparativosFiltrados = [];
  }
}
