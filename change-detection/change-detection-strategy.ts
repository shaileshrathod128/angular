import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "app-on-push-example",
  template: `
    <h3>Change Detection Strategy: OnPush</h3>
    <p>Counter: {{ counter }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="manualTrigger()">Manual Trigger</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushExampleComponent {
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  increment() {
    this.counter++;
  }

  manualTrigger() {
    this.counter++;
    this.cdr.markForCheck();
  }
}
