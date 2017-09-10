import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>New {{data.name}} offers</h3>
      <p><img class="img-res" src="{{data.bio}}"></p>

      <strong>Grab this offer today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}