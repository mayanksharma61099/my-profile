import Link from "next/link";
import style from '@/styles/navigation-bar.module.css'
import { useRouter } from "next/router";

export default function NavigationItems (props) {

    const router = useRouter();
    let link = props.link;
    
    if (props.link == 'Home')
    {
        return(
            <li className={`nav-item ${style.highlight}`}>
                <Link className= {`nav-link ${router.pathname == "/" ? `${style.active}`: ""}`} data-bs-toggle="pill" href='/' style={{color: 'black'}}> 
                {props.link}</Link>
            </li>
        ); 
    } 
    return (
        <li className={`nav-item ${style.highlight}`}>
            <Link className={`nav-link ${router.pathname == `/${props.link}` ? `${style.active}`: ""}`} data-bs-toggle="pill" href= {props.link} style={{color: 'black'}}>{props.link}</Link>
        </li>
    );
}