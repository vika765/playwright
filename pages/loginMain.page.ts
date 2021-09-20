import {BrowserHelper} from "../helpers/browser.helper";
import {Urls} from "../data/urls.enum";
import {expect, Page} from "@playwright/test";
import {ActionsHelper} from "../helpers/actions.helper";
import {WaitersHelper} from "../helpers/waiters.helper";
import {coreConceptsContent, gettingStartedContent} from "../data/pagesContent";
import {AssertionsHelper} from "../helpers/assertions.helper";
import {sleep} from "../utils/commonUtils.utils";
import {ButtonsEnum} from "../data/buttons.enum";

export class LoginMainPage {

    readonly page: Page;
    readonly browser: BrowserHelper;
    readonly actions: ActionsHelper;
    readonly waiters: WaitersHelper;
    readonly assertions: AssertionsHelper;

    private selectors = {
        loginField: '#passp-field-login',
        submitLogin: 'xpath=//button[@id="passp:sign-in"]',
        passwordField: '#passp-field-passwd',
        submitPassword: 'xpath=//*[contains(text(), "Войти")]//parent::button[@id="passp:sign-in"]',
        wrongPasswordError: 'xpath=//div[@id="field:input-passwd:hint"]',
        notExistingAccount: 'xpath=//div[@id="field:input-login:hint"]'

    }

    constructor(page: Page) {
        this.page = page;
        this.browser = new BrowserHelper(this.page);
        this.actions = new ActionsHelper(this.page);
        this.waiters = new WaitersHelper(this.page);
        this.assertions = new AssertionsHelper(this.page);
    }

    public async enterLogin(Login: string): Promise<void> {
        await this.actions.fillField(this.selectors.loginField, Login);

    }

    public async pressSubmitLoginButton(): Promise<void> {
        await this.actions.click(this.selectors.submitLogin);
    }

    public async enterPassword(Password: string): Promise<void> {
        await this.actions.fillField(this.selectors.passwordField, Password);

    }

    public async pressSubmitPasswordButton(): Promise<void> {
        await this.actions.click(this.selectors.submitPassword);
    }


    public async checkText(): Promise<boolean> {
        const text = await this.page.textContent(this.selectors.wrongPasswordError);
        await expect(text).toBe('Неверный пароль');
    }

        public async checkErrorText(): Promise<boolean> {
        const text = await this.page.textContent(this.selectors.notExistingAccount);
        await expect(text).toBe('Такого аккаунта нет');
    }


    }




