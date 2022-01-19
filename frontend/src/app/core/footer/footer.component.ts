import { Component, OnInit } from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTwitter, faFacebook} from "@fortawesome/free-brands-svg-icons"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub: IconDefinition = faGithub;
  faTwitter: IconDefinition = faTwitter;
  faFacebook: IconDefinition = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
