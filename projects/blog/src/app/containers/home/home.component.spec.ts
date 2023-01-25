import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostHomeApiMock, ProfileApiMock } from 'commonlib';
import { PostHomeApi } from '../../core/api/post-home.api';
import { ProfileApi } from '../../core/api/profile.api';
import { usersMock } from '../../core/models/users';
import { HomeComponent } from './home.component';

describe('HomeComponent', () =>
{
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HomeComponent
            ],
            providers: [
                { provide: ProfileApi, useClass: ProfileApiMock },
                { provide: PostHomeApi, useClass: PostHomeApiMock }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        let userLoggedMock = usersMock.find(user => user.id === 1);
        component.usersNetwork =  usersMock.filter(user => user.id !== 1)
        if (userLoggedMock)
        {
            component.userLogged = userLoggedMock;
        }
    });

    it('should create the app', () =>
    {
        expect(component).toBeTruthy();
    });

    it('header should be half of window (in px)', () =>
    {
        const halfWindow: string = `${window.innerHeight / 2}px`;
        component.onResize();
        expect(component.headerHeight).toEqual(halfWindow);
    });

    it(`logged in user must be 1`, () =>
    {
        expect(component.userLogged.id).toEqual(1);
    });

    it('must add a user in the userDetails property', () =>
    {
        const usersDetailsMock = usersMock.find(user => user.id === 2);
        component.selectedUser(2);

        expect(component.userDetails.id === usersDetailsMock?.id).toBeTruthy();
    });

    it('alert should open if the logged in user clicks on his own profile', (() => {

        spyOn(window, "alert");
        component.selectedUser(1);

        expect(window.alert).toHaveBeenCalledWith("Você está selecionando seu proprio perfil!")
      }));
});
