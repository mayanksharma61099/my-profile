import style from '@/styles/content.module.css';
import EducationContent from './education-content';

export default function Education () {

    const NMIMS = [
        'Business Communications',
        'Information System for Managers'
    ];

    const Amity = [
        'Data Structures',
        'Cloud Infrastructure and Services',
        'Network Security and Cryptography',
        'Software Engineering and Development'
    ];

    const GGSIPU = [
        'Web Technologies',
        'Object-oriented Programming',
        'Software Engineering'
    ];

    return(
        <div className={`col-sm-6 ${style.portfolio_title}`}>
            <h2>Education</h2>
            <EducationContent university='NMIMS University' course='Masters in Business Administrations' GPA='6.10' 
            learning={NMIMS} date='June, 2024' /><hr className={style.line_education} />
            <EducationContent university='Amity University' course='Masters in Computer Applications' GPA='6.61' 
            learning={Amity} date='November, 2022' /><hr className={style.line_education} />
            <EducationContent university='Jagan Institute of Management Studies, GGSIPU' course='Bachelors in Computer Applications' GPA='8.37' 
            learning={GGSIPU} date='October, 2020' />
        </div>
    );
}