@Component({
  selector: "app-track-list",
  template: `
    <li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>
  `,
})
export class TrackListComponent {
  items = [
    { id: 1, name: "Alpha" },
    { id: 2, name: "Beta" },
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
