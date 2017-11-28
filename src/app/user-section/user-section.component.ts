import { StorageAdapter } from './../storage-adapter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  constructor(private router: Router, private storage: StorageAdapter) { }

  ngOnInit() {
    const session = JSON.parse(this.storage.getItem("SESSID")); // convert to JSON object
    if (!session || !session['auth']) {
      this.router.navigate(['']);
    }
  }

  userDashboard(): void {
    // console.log
  }

  logoutUser() {
    try { this.storage.removeItem("SESSID"); this.router.navigate(['']); }
    catch (err) { console.log(err); }
  }

}
