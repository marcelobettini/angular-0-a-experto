import { Component, signal, WritableSignal } from '@angular/core'

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  countValue: number = 0
  countSignal: WritableSignal<number> = signal(0)
  handlePlusOne() {
    this.countValue += 1
    this.countSignal.update(value => value + 1)
  }
}
