
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	studentsList = [
	{	
		id : 24587,
		first_name : "Cheikh Oumar",
		last_name : "FALL",
		email : "cheikhoumar001@gmail.com",
		phone : 221771613086,
		department : "Science"
	},
	{
		id : 74587,
		first_name : "Faky",
		last_name : "Ndao",
		email : "faky@gmail.com",
		department : "Commerce"
	}

	];

	constructor() {
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
