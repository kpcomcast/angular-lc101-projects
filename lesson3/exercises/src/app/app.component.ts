import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff(): void {
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.message = "Shuttle in flight";
      this.takeOffEnabled = false;
    }
  }

  handleLanding(): void {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed";
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.takeOffEnabled = true;
  }

  handleAbort(): void {
    let result = window.confirm("Are you sure you want to abort mission?");
    if (result) {
      this.message = "Mission aborted";
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.takeOffEnabled = true;
    }
  }

  getBackgroundInfo(back): number[] {
    let width = back.offsetWidth;
    let height = back.offsetHeight;
    return [width, height];
  }

  moveRocket(element, direction:string): void {
    let backInfo = this.getBackgroundInfo(element)

    if (direction === 'right' && this.width + 75 < backInfo[0]) {
      this.width += 10;
    } else if (direction === 'left' && this.width > 0) {
      this.width += -10;
    } else if (direction === 'up' && (this.height / 1000) + 75 < backInfo[1]) {
      this.height += 10000;
    } else if (direction === 'down' && this.height > 0) {
      this.height += -10000;
    }

    if (this.height > 0) {
      this.message = "Shuttle in flight";
      this.color = "blue";
      this.takeOffEnabled = false;
    } else if (this.height === 0) {
      this.message = "The shuttle has landed";
      this.color = "green";
      this.takeOffEnabled = true;
    }

    if (this.width + 75 > backInfo[0] - 5 && this.height !== 0) {
      this.color = "orange";
    } else if ((this.height / 1000) + 75 > backInfo[1] - 11) {
      this.color = "orange";
    }

  }

}
