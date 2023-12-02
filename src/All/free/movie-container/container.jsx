import { CoBox, GlobalStyle } from './container.styled'
function Co(props) {
    return (
        <CoBox>
            <GlobalStyle></GlobalStyle>
            <a className="vip-co" href="#">
            <div className="vip-pic">
                <img className="v-pic" src={props.image}/>
                <p className='fr-box'>رایگان</p>
            </div>
             <h4>{props.title}</h4>
        </a>
        </CoBox> 
    );
}
export default Co;