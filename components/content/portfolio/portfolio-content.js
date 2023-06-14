import style from '@/styles/content.module.css';
import Experience from './experience/experience';
import Education from './education/education';

export default function PortfolioContent () {
    return (
        <div className= {`col-sm-12 ${style.fade_in}`}>
            <div className='row'>
                <Experience />
                <Education />
            </div>
        </div>
    );
}