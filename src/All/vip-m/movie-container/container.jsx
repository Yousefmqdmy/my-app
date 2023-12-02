import { CoBox, GlobalStyle } from './container.styled'
function Co(props) {
    return (
        <CoBox>
            <GlobalStyle></GlobalStyle>
            <a className="vip-co" href="#">
            <GlobalStyle></GlobalStyle>
            <div className="vip-pic">
                <img className="v-pic" src={props.image}/>
            </div>
            <h4>{props.title}</h4>
        </a>
        </CoBox>
    );
}
export default Co;