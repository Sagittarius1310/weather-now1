import { Component } from '@angular/core';

import { UnitsControl } from '@features/units-control/units-control';

@Component({
    selector: 'app-header',
    imports: [UnitsControl],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {}
