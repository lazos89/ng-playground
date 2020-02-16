import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertMiles"
})
export class ConvertMilesPipe implements PipeTransform {
  transform(value: number, units: string): number {
    if (!value) {
      return null;
    }
    switch (units) {
      case "km":
        return value * 1.6;
      case "m":
        return value * 1.6 * 1000;
      case "cm":
        return value * 1.6 * 1000 * 1000;
      default:
        throw new Error("Not defined unit");
    }
  }
}
