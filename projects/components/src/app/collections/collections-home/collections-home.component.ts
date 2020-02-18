import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.scss"]
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "name1", age: 21, job: "job1" },
    { name: "name2", age: 27, job: "job2" },
    { name: "name3", age: 22, job: "job3" },
    { name: "name4", age: 24, job: "job4" }
  ];
  headers = [
    { key: "key1", label: "Name" },
    { key: "key2", label: "Age" },
    { key: "key3", label: "Job" }
  ];
  constructor() {}

  ngOnInit(): void {}
}
