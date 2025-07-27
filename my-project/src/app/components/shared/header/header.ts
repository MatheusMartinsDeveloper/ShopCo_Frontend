import { Component, OnInit } from "@angular/core";
import { Menubar } from "primeng/menubar";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [Menubar],
  templateUrl: "./header.html",
})
export class Header implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: "Shop"
      },
      {
        label: "A venda"
      },
      {
        label: "New Arrivals"
      },
      {
        label: "Brands"
      }
    ];
  }
}