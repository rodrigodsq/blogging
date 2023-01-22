import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit
{
    public headerHeight: string = '';


    public ngOnInit(): void
    {
        this.refreshHeaderHeight();
    }

    @HostListener('window:resize', ['$event'])
    public onResize(): void
    {
        this.refreshHeaderHeight();
    }

    public refreshHeaderHeight(): void
    {
        console.log(window.innerHeight);
        this.headerHeight = `${window.innerHeight / 2}px`;
    }
}
