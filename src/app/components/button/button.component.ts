import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Button'
  @Input() size: 'small' | 'large' = 'large'
  @Input() disabled: Boolean = false
  @Input() backgroundColor: string

  @Output()
  onClick = new EventEmitter<Event>()

  constructor() {}

  ngOnInit(): void {}

  public get classes(): string[] {
    const disabled = this.disabled ? 'disabled' : ''
    return [`waves-effect waves-light btn`, `btn-${this.size}`, disabled]
  }
}
