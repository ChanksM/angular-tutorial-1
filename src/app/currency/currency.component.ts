import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../currency.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    rates: Array<object> = [];
    length = 0;
    constructor(private currencyService: CurrencyService) { }

    ngOnInit() {
        const action = (value) => {
            this.rates.push(value);
        };

        const complete = (value) => {
            this.length = value;
        };

        const filterCallBack = ({value}) => value > 2;
        const mapCallBack = ({currency, value}) => ({currency, value, icon: '😃'});

        const Observer = this.currencyService.Observer;
        Observer
        .filter(filterCallBack)
        .map(mapCallBack)
        .subscribe(action, complete);
    }
}
