import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GlobalService {
  getMessage() {
    return "Hello from GlobalService";
  }
}
