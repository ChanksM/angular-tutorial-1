import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { filter, map } from 'rxjs/operators';

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

        const complete = () => {
            this.length = this.rates.length;
        };

        const filterCallBack = ({value}) => value > 2;
        const mapCallBack = ({rates}) => {
            const currency = Object.keys(rates)[0];
            const value = rates[currency];

            return {
                currency,
                value,
                icon: '😃'
            };
        };

        const Observer = this.currencyService.Observer;
        Observer
        .pipe(
            map(mapCallBack),
            filter(filterCallBack)
        )
        .subscribe({
            next: action,
            complete
        });
    }
}
