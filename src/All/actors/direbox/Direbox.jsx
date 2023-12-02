import { GlobalStyle } from "./Direbox.styled";


function Direbox(props) {
    return (
        <a className="dire-co" href="#">
            <GlobalStyle></GlobalStyle>
            <div className="dire-pic">
                <img className="d-pic" src={props.image}/>
            </div>
            <h5>{props.title}</h5>
        </a>
    );
}

export default Direbox;