import { Component, Input } from '@angular/core';

@Component( {
                selector: 'drop-down-title',
                templateUrl: 'drop-down-title.html',
                host: {
                    '(document:tap)': 'onHideDropDown($event)'
                }
            } )
export class DropDownTitleComponent {

    @Input( "title" ) title: string;
    showList: boolean = false;

    onToggleList() {
        this.showList = !this.showList;
    }


    onHideDropDown( event ) {
        this.showList = false;
    }
}
