import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent{
  Title = 'title-example'
  @Input() name: string
  Completed = 'completion-status'

}
