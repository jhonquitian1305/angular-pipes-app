import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'quitian';
  public nameUpper: string = 'QUITIAN';
  public fullName: string = 'jHoN QuITiaN';

  public customDate: Date = new Date();

}
