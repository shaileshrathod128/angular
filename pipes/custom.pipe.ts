import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "exclaim" })
export class ExclaimPipe implements PipeTransform {
  transform(value: string): string {
    return `${value}!!!`;
  }
}
