import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component( {
                selector: 'page-home',
                templateUrl: 'home.html'
            } )
export class HomePage {
    selectedList: any;

    lists = [
        {
            name: "Family",
            people: [
                {
                    name: "Mohammed",
                    imagePath: "http://lorempixel.com/150/150/people/3/"
                },
                {
                    name: "Khalid",
                    imagePath: "http://lorempixel.com/150/150/people/8/"
                },
                {
                    name: "Norah",
                    imagePath: "http://lorempixel.com/150/150/people/1/"
                },
                {
                    name: "Abdullah",
                    imagePath: "http://lorempixel.com/150/150/people/5/"
                },
                {
                    name: "Moneara",
                    imagePath: "http://lorempixel.com/150/150/people/9/"
                },
                {
                    name: "Soaad",
                    imagePath: "http://lorempixel.com/150/150/people/2/"
                }
            ]
        },
        {
            name: "Work",
            people: [
                {
                    name: "Abdulaziz",
                    imagePath: "http://lorempixel.com/150/150/people/8/"
                },
                {
                    name: "Faisal",
                    imagePath: "http://lorempixel.com/150/150/people/3/"
                },
                {
                    name: "Nawal",
                    imagePath: "http://lorempixel.com/150/150/people/2/"
                },
                {
                    name: "Abdullah",
                    imagePath: "http://lorempixel.com/150/150/people/6/"
                },
                {
                    name: "Yasser",
                    imagePath: "http://lorempixel.com/150/150/people/4/"
                },
                {
                    name: "Zaitonah",
                    imagePath: "http://lorempixel.com/150/150/people/1/"
                }
            ]
        },
        {
            name: "Friends",
            people: [
                {
                    name: "Ahmad",
                    imagePath: "http://lorempixel.com/150/150/people/4/"
                },
                {
                    name: "Saad",
                    imagePath: "http://lorempixel.com/150/150/people/1/"
                },
                {
                    name: "Abdulrahman",
                    imagePath: "http://lorempixel.com/150/150/people/10/"
                },
                {
                    name: "Saud",
                    imagePath: "http://lorempixel.com/150/150/people/3/"
                },
                {
                    name: "Omar",
                    imagePath: "http://lorempixel.com/150/150/people/8/"
                }
            ]
        },
    ]

    constructor( public navCtrl: NavController ) {
        this.selectedList = this.lists[0];
    }

    onSelect( list: string ) {
        this.selectedList = list;
    }
}
