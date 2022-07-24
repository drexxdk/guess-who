import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  selectedLang?: string;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'da']);
    const lang = localStorage.getItem('lang');
    debugger;
    if(lang && (lang === 'da')) {
      this.selectedLang = lang;
    } else {
      this.selectedLang = 'en';
    }
    translate.setDefaultLang(this.selectedLang);
  }
  //Switch language
  translateLanguageTo(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }


}
