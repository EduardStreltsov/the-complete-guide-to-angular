import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer = false;
  private serverCreationStatus = 'no server was created!';
  private serverName = 'initial server name';
  private serverCreated = false;
  servers = ['Server 1', 'Server 2', 'Server 3', 'Server 4'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
