import { Cor, GlobalStyle } from './Root.styled';
function Root(props) {

    return (
        <Cor>
            <GlobalStyle></GlobalStyle>
            <img src={props.rbimg} className='h__img' />
            <div className="h-container">
                <a href="">
                    <img className='r-img' src={props.rimg} />
                </a>
                <a href="">
                    <h1>{props.header}</h1>
                </a>
                <ul>
                    <li>
                        <p className='h-p'>زیرنویس</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="20" height="20" viewBox="0 0 20 20" class="i-icon-0-1-188">
                            <path class="svg-c1" d="M14.216 3H6.26a3.26 3.26 0 0 0-3.26 3.26v7.957a3.26 3.26 0 0 0 3.26 3.26h7.955a3.26 3.26 0 0 0 3.26-3.26V6.262A3.26 3.26 0 0 0 14.216 3zM6.2 14.428a.9.9 0 0 1 0-1.8.9.9 0 0 1 .636 1.537.9.9 0 0 1-.637.263zm8.077 0h-5.31a.9.9 0 1 1 0-1.8h5.3a.9.9 0 1 1 0 1.8zm0-3.356H6.2a.9.9 0 0 1 0-1.8h8.076a.9.9 0 0 1 0 1.8zm0-3.222H6.2a.9.9 0 1 1 0-1.8h8.076a.9.9 0 1 1 0 1.8z">
                            </path>
                        </svg>
                    </li>
                    <li>
                        <p className='h-p'>دوبله نماوا</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="20" height="20" viewBox="0 0 20 20" class="i-icon-0-1-188">
                            <path class="svg-c1" d="M16.097 6.244a.53.53 0 0 0-.372.153.52.52 0 0 0-.153.372v5.285a3.48 3.48 0 0 1-1.9 3.106l-.088.045a7.87 7.87 0 0 1-7.171 0l-.087-.045a3.48 3.48 0 0 1-1.9-3.107V6.768c0-.14-.055-.273-.154-.37a.53.53 0 0 0-.37-.154.52.52 0 0 0-.525.525v5.285a4.52 4.52 0 0 0 2.47 4.04l.085.043a8.89 8.89 0 0 0 3.54.964v1.212H7.848c-.14 0-.273.055-.37.154a.53.53 0 0 0-.154.37.52.52 0 0 0 .525.525h4.294a.52.52 0 0 0 .525-.525c0-.14-.055-.273-.154-.37a.53.53 0 0 0-.37-.154H10.52V17.1a8.9 8.9 0 0 0 3.54-.964l.087-.044c1.517-.775 2.47-2.336 2.467-4.04V6.768c-.001-.286-.23-.52-.516-.524zM7.244 13.9l.06.03a5.9 5.9 0 0 0 5.392 0l.06-.03a2.83 2.83 0 0 0 1.538-2.518v-7.45a2.83 2.83 0 0 0-1.538-2.518l-.06-.03a5.9 5.9 0 0 0-5.392 0l-.06.03a2.83 2.83 0 0 0-1.538 2.518v7.45a2.83 2.83 0 0 0 1.538 2.518z">
                            </path></svg>
                    </li>
                    <li>
                        <p className='h-p'>{props.like}%</p>
                    </li>
                    <li>
                        <p className='h-p'>{props.score}</p>
                    </li>
                     <li>
                        <p className='h-p'>{props.year}</p>
                    </li>
                    <li>
                        <span className='range'>
                            {props.ranges}
                        </span>
                    </li>
                </ul>
                <span>
                    <p className='header-p'> {props.type}</p>
                    </span>
            </div>
        </Cor>
    );
}

export default Root;
