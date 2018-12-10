import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
})
export class UserComponent  {
  userDetails:any=[{ id: 1, name: 'Rajesh' }, //clear this array to see the change
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];

}