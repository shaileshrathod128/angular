import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<button (click)="notify()">Notify Parent</button>`,
})
export class ChildComponent {
  @Output() message = new EventEmitter<string>();
  notify() {
    this.message.emit("Hello from child");
  }
}

@Component({
  selector: "app-parent",
  template: `
    <app-child (message)="receiveMsg($event)"></app-child>
    <p>{{ msg }}</p>
  `,
})
export class ParentComponent {
  msg = "";
  receiveMsg(event: string) {
    this.msg = event;
  }
}
