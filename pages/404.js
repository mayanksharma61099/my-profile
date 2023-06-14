import NavigationBar from "@/components/Navigation/navigation-bar";
import style from '@/styles/404.module.css';

export default function PageNotFound () {
    return (
        <div>
            <NavigationBar />
            <div className={style.center}> 
                <h1>Oops Page Not Found!! :-(</h1 >
            </div>
        </div>
    );
}