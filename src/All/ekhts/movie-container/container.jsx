import { CoBox, GlobalStyle } from './container.styled'
function Co(props) {
    return (
        <CoBox className='co-ch'>
            <GlobalStyle></GlobalStyle>
            <a className="vip-co vco" href="#">
            <div className="vip-pic v2co">
                <img className="v-pic" src={props.image}/>
            </div>
            <h4>{props.title}</h4>
        </a>
        </CoBox>
    );
}
export default Co;