import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://matias.me/nsfw/?fbclid=PAZXh0bgNhZW0CMTEAAabkY3M1TC-wp2pFCuLbtrCw_fHsHrOzxKorNnjE_n30OtwkixieY6ejrBk_aem_Y3ncnAzYjFQNen2-kbbAzA'
    );
  }
}
