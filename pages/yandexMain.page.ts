// @ts-ignore
import {BrowserHelper} from "../helpers/browser.helper";
import {Urls} from "../data/urls.enum";
import {expect, Page} from "@playwright/test";
import {ActionsHelper} from "../helpers/actions.helper";
import {WaitersHelper} from "../helpers/waiters.helper";
import {coreConceptsContent, gettingStartedContent} from "../data/pagesContent";
import {AssertionsHelper} from "../helpers/assertions.helper";

export class YandexMainPage {

    readonly page: Page;
    readonly browser: BrowserHelper;
    readonly actions: ActionsHelper;
    readonly waiters: WaitersHelper;
    readonly assertions: AssertionsHelper;

    private selectors = {
        geotagValue: '.geolink__reg',
        geotagButton: 'xpath=//*[@class = "geolink__button"]/parent::a',
        moreButton: '[data-statlog= "services_new.more"]',
        moreMenuContent: '.services-new__more-popup-services',
        loginButton: '.desk-notif-card__login-new-item-title',
        userName: '.usermenu__user-name',
        firstLetterOfUser: '.username__first-letter',
        otherLettersOfUser: 'xpath=//body/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]',
        userDropdown: '.username__first-letter',
        logoutButton: 'xpath=//span[contains(text(),"Выйти")]'
    };

    constructor(page: Page) {
        this.page = page;
        this.browser = new BrowserHelper(this.page);
        this.actions = new ActionsHelper(this.page);
        this.waiters = new WaitersHelper(this.page);
        this.assertions = new AssertionsHelper(this.page);
    }

    public async openYandexMainPage(): Promise<void> {
        await this.browser.openPage('https://yandex.by/');
    }

    public async openLocationPage(): Promise<void> {
        await this.actions.click(this.selectors.geotagButton);
    }

    public async checkCityName(cityName: string): Promise<void> {
        await this.assertions.checkText(this.selectors.geotagValue, cityName);
    }

    public async openMoreMenu(): Promise<void> {
        await this.actions.click(this.selectors.moreButton);
    }

    public async getMoreMenuContent(): Promise<string[]> {
        await this.openMoreMenu();
        return await this.actions.getTextAll(this.selectors.moreMenuContent);
    }

    public async openLoginMainPage(): Promise<void> {
        await this.actions.click(this.selectors.loginButton);
    }

    public async pressUserDropdown(): Promise<void> {
        await this.actions.click(this.selectors.userDropdown);
    }

    public async checkUserName(userName:string): Promise<void> {
        const text = await this.page.innerText(this.selectors.userName);
        await expect(text).toBe(userName);
        console.log(text);
    }

    public async pressLogoutButton(): Promise<void> {
        await this.actions.click(this.selectors.logoutButton);
    }

    public async checkOfButtonVisibility(): Promise<boolean> {
        await this.page.isVisible(this.selectors.loginButton);
    }



}