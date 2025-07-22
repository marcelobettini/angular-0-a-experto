import { Component, computed, signal, WritableSignal } from "@angular/core"
@Component({
    selector: 'app-counter',
    imports: [],
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
}
)
export class CounterComponent {
    count: number = 0;
    signalCount: WritableSignal<number> = signal(0);
    public constructor() { }
    //Using Zone JS
    // This is the traditional way of handling state in Angular
    // It uses Angular's change detection mechanism to update the view
    increment() {
        this.count++
    }
    decrement() {
        this.count--
    }
    reset() {
        this.count = 0
    }

    doubleSignalCount = computed(() => this.signalCount() * 2)

    //Using Signals
    // This is a new way of handling state in Angular
    // It uses a reactive programming model to update the view
    incrementSignal() {
        this.signalCount.update(value => value + 1)
    }
    decrementSignal() {
        this.signalCount.update(value => value - 1)
    }
    resetSignal() {
        this.signalCount.set(0)
    }
}