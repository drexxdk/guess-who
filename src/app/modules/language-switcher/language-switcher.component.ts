import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langType } from '@portal-app/types/lang.type';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  selectedLang?: langType;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'da']);
    const lang = localStorage.getItem('lang') as langType;
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
