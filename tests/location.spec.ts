import {expect, selectors, test} from '@playwright/test';
import {YandexMainPage} from "../pages/yandexMain.page";
import {LocationPage} from "../pages/location.page";
import {LoginMainPage} from "../pages/loginMain.page";
import {sleep} from "../utils/commonUtils.utils";
import {loginData} from "../data/loginData.enum";
import {ActionsHelperctions} from "../helpers/actions.helper";


test('Test', async ({page}) => {
    const firstCity = 'Лондон';
    const secondCity = 'Париж'

    const yandexMain = new YandexMainPage(page);
    const locationPage = new LocationPage(page);

    await yandexMain.openYandexMainPage();
    await yandexMain.openLocationPage();
    await locationPage.enterCityName(firstCity);
    await yandexMain.checkCityName(firstCity);
    const firstCityMoreContent = await yandexMain.getMoreMenuContent();

    await yandexMain.openLocationPage();
    await locationPage.enterCityName(secondCity);
    await yandexMain.checkCityName(secondCity);
    const secondCityMoreContent = await yandexMain.getMoreMenuContent();

    await expect(firstCityMoreContent).toStrictEqual(secondCityMoreContent);
})

test('Login', async ({page}) => {

    const yandexMain = new YandexMainPage(page);
    const loginMain = new LoginMainPage(page)

    await yandexMain.openYandexMainPage();
    await yandexMain.openLoginMainPage();
    await loginMain.enterLogin(loginData.login);
    await loginMain.pressSubmitLoginButton();
    await loginMain.enterPassword(loginData.password);
    await loginMain.pressSubmitPasswordButton();
    await yandexMain.pressUserDropdown();
    await yandexMain.checkUserName(loginData.login);
})

test ('Logout', async ({page}) => {

    const yandexMain = new YandexMainPage(page);
    const loginMain = new LoginMainPage(page)

    await yandexMain.openYandexMainPage();
    await yandexMain.openLoginMainPage();
    await loginMain.enterLogin(loginData.login);
    await loginMain.pressSubmitLoginButton();
    await loginMain.enterPassword(loginData.password);
    await loginMain.pressSubmitPasswordButton();
    await yandexMain.pressUserDropdown();
    await yandexMain.pressLogoutButton();
    await yandexMain.checkOfButtonVisibility();

})

test ('WrongPassword', async ({page}) => {

    const yandexMain = new YandexMainPage(page);
    const loginMain = new LoginMainPage(page);

    await yandexMain.openYandexMainPage();
    await yandexMain.openLoginMainPage();
    await loginMain.enterLogin(loginData.login);
    await loginMain.pressSubmitLoginButton();
    await loginMain.enterPassword(loginData.wrongpassword);
    await loginMain.pressSubmitPasswordButton();
    await loginMain.checkText();

})

test ('WrongLogin', async ({page}) => {

    const yandexMain = new YandexMainPage(page);
    const loginMain = new LoginMainPage(page);

    await yandexMain.openYandexMainPage();
    await yandexMain.openLoginMainPage();
    await loginMain.enterLogin(loginData.wronglogin);
    await loginMain.pressSubmitLoginButton();
    await loginMain.checkErrorText();
})

