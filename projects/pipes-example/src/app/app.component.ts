import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "pipes-example";
  item = "";
  item2 = "";
  amount: number;
  height: number;
  miles: number;
  json = {
    item1: "item1",
    item2: "item2",
    item3: "item3"
  };
  date: string;

  onDateChange(date: string) {
    console.log(date);
    this.date = date;
  }
  onMilesChange(miles: string) {
    console.log(miles);
    this.miles = parseFloat(miles);
  }
  onAmountChange(amount: number) {
    console.log(amount);
    this.amount = amount;
  }
  onHeightChange(height: number) {
    console.log(height);
    this.height = height;
  }
}
