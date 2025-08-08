import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smartphone } from '../../models/smartphone.model';
import { SmartphoneService } from '../../services/smartphone.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.page.html',
  styleUrls: ['./specs.page.scss'],
  standalone: false,
})
export class SpecsPage implements OnInit {
  smartphone?: Smartphone;

  constructor(
    private activatedRoute: ActivatedRoute,
    private smartphoneService: SmartphoneService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const smartphoneId = params.get('id');
      if (smartphoneId) {
        this.smartphoneService.getSmartphoneById(smartphoneId).subscribe(s => {
          this.smartphone = s;
        });
      }
    });
  }

  // Método adicionado para corrigir o erro `formatText`
  formatText(text: string | string[]): SafeHtml {
    if (Array.isArray(text)) {
      const listItems = text.map(item => `<li>${item}</li>`).join('');
      return this.sanitizer.bypassSecurityTrustHtml(`<ul>${listItems}</ul>`);
    }
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
