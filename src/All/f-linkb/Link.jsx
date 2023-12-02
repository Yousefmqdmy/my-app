import { Lon, GlobalStyle } from "./Link.styled";

function Link() {
    return (
        <Lon>
            <GlobalStyle></GlobalStyle>
            <div className="li">
                <p className="link-b">درباره نماوا</p>
            </div>
            <div className="li">
                <p className="link-b">تماس با ما</p>
            </div>
            <div className="li">
                <p className="link-b">سوالات متداول</p>
            </div>
            <div className="li">
                <p className="link-b">کارت هدیه</p>
            </div>
            <div className="li">
                <p className="link-b">خرید اشنراک</p>
            </div>
            <div className="li">
                <p className="link-b">تبلیغ در نماوا</p>
            </div>
            <div className="li">
                <p className="link-b">فرصت های شغلی</p>
            </div>
            <div className="li">
                <p className="link-b">اپلیکیشن ها</p>
            </div>
        </Lon>
    );
}

export default Link;