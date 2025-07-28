import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-lifecycle",
  template: `<p>Lifecycle demo</p>`,
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log("Component Initialized");
  }

  ngOnDestroy() {
    console.log("Component Destroyed");
  }
}
