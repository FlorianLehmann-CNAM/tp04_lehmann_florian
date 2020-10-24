import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/User";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"]
})
export class ClientComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit(): void {}

  onUserChanged(user: User): void {
    console.log("new user :) ", user);
    this.user = user;
  }
}
