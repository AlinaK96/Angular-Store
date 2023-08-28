import { Component, Input} from '@angular/core';
import {ModalService} from '../../services/modal.service'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
})
export class ModelComponent {

  @Input() title: string

  constructor(public modalService: ModalService){}

}
