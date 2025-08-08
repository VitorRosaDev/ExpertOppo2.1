
export class Smartphone {
  
  // Propriedades básicas existentes
  id: string;
  nome: string;
  imagem: string;
  subtitulo: string;
  diferencial: string;
  cameras: string;
  carregador: string;
  somm: string;
  estereo: string;
  bateria: string;
  processador: string;
  linha: 'todos' | 'linha-a' | 'linha-reno';

  // NOVAS PROPRIEDADES DE COMPARAÇÃO NO NÍVEL SUPERIOR
  // Adicionadas para serem usadas diretamente no comparativo (reversao.page)
  memoriaRam: string;
  memoriaRom: string;
  tela: string;
  cameraTraseira: string;
  cameraFrontal: string;
  som: string;

  // Propriedades de especificação detalhadas, se ainda usadas em outras páginas
  specs: {
    cores: string;
    dimensoesPeso: { altura: string; largura: string; espessura: string; peso: string; };
    armazenamento: { ram: string; tipoRam: string; rom: string; especificacoesRom: string; microSD: string; usbOtg: string; };
    tela: { tamanho: string; proporcaoTela: string; resolucao: string; taxaAtualizacao: string; taxaAmostragemToque: string; gamaCores: string; profundidadeCor: string; densidadePixels: string; brilho: string; painel: string; coberturaVidro: string; };
    cameras: { traseira: string; frontal: string; modoDisparo: { traseira: string; frontal: string; }; video: { traseira: string; frontal: string; }; };
    processamento: { soc: string; cpu: string; gpu: string; };
    bateria: { capacidade: string; carregamentoRapido: string; };
    somm: string;
    estereo: string;
    biometria: { impressaoDigital: string; reconhecimentoFacial: string; };
    sensores: string[];
    redeCelular: { sim: string; tipoCartaoSim: string; bandasFrequencia: string; };
    conectividade: { wlan: string; versaoBluetooth: string; codecAudioBluetooth: string; interfaceUsb: string; conectorFoneOuvido: string; nfc: string; };
    sistemaOperacional: string;
    tecnologiaLocalizacao: { gnss: string; outros: string; };
    naCaixa: string[];
  };

  constructor(data: any) {
    // Atribuição de propriedades básicas
    this.id = data.id;
    this.nome = data.nome;
    this.imagem = data.imagem;
    this.subtitulo = data.subtitulo;
    this.diferencial = data.diferencial;
    this.cameras = data.cameras;
    this.carregador = data.carregador;
    this.bateria = data.bateria;
    this.somm = data.somm;
    this.estereo = data.estereo;
    this.processador = data.processador;
    this.linha = data.linha;
    this.specs = data.specs; // Atribui o objeto de especificações detalhadas

    // Atribuição das novas propriedades de comparação a partir dos dados recebidos
    this.memoriaRam = data.specs.armazenamento.ram;
    this.memoriaRom = data.specs.armazenamento.rom;
    this.tela = `${data.specs.tela.tamanho} | ${data.specs.tela.taxaAtualizacao}`; // Combina informações da tela
    this.cameraTraseira = data.specs.cameras.traseira;
    this.cameraFrontal = data.specs.cameras.frontal;
    this.som = data.specs.somm; // Valor padrão ou extraído dos dados, se houver
  }

  // Métodos de comparação podem ser mantidos aqui se necessário
  compararBateria(outroSmartphone: Smartphone): string {
    const minhaBateria = parseInt(this.bateria.replace(/[^0-9]/g, ''));
    const outraBateria = parseInt(outroSmartphone.bateria.replace(/[^0-9]/g, ''));

    if (minhaBateria > outraBateria) {
      return `${this.nome} tem bateria maior (${this.bateria}) que ${outroSmartphone.nome} (${outroSmartphone.bateria}).`;
    } else if (outraBateria > minhaBateria) {
      return `${outroSmartphone.nome} tem bateria maior (${outroSmartphone.bateria}) que ${this.nome} (${this.bateria}).`;
    } else {
      return `${this.nome} e ${outroSmartphone.nome} têm bateria similar (${this.bateria}).`;
    }
  }
}
