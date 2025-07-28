import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SharedService {
  private msgSource = new BehaviorSubject<string>("");
  currentMsg = this.msgSource.asObservable();

  updateMessage(msg: string) {
    this.msgSource.next(msg);
  }
}
