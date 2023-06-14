import style from '@/styles/content.module.css';
import ExperienceContent from './experience-content';
import React from 'react';    

export default function Experience () {

    const barclays = [
        'Understanding Business requirement and creating certain matrices and providing automation solutions',
        'Creating variety of Dashboards using Tableau Desktop',
        'Web Designing, Development and UI Updates',
        'Creating Windows Applications using WPF and C#'
    ];

    const programmerTCS = [
        'Working in a customer facing team',
        'Creating scripts according to requirements sent by the client',
        'Writing a program in Eclipse IDE using Core Java and Selenium',
        'Fetching Data from Oracle Database to confirm value of the data',
        'Managing events that helps in increasing associates morale, confidence and efficiency in their work.'
    ];

    const gradTraineeTCS = [
        'Involved in Multiple High-End Projects for US Based Large MNC',
        'Creating Scripts as according to requirements sent by client',
        'Manually Testing Software using Industry Standard Tools, like HP ALM'
    ];

    return (
        <div className={`col-sm-6 ${style.portfolio_title} border-end`}>
            <h2>Experience</h2>
            <ExperienceContent position='Senior Software Engineer' 
            company='Barclays Global Service Center Pvt. Ltd.'
            dateRange='Dec, 2022 - Present' work= {barclays}/><hr className={style.line} />
            <ExperienceContent position='Programmer' 
            company='Tata Consultancy Services'
            dateRange='Oct, 2021 - Nov, 2022' work= {programmerTCS}/><hr className={style.line} />
            <ExperienceContent position='Graduate Trainee' 
            company='Tata Consultancy Services'
            dateRange='Oct, 2020 - Sept, 2021' work= {gradTraineeTCS}/>
        </div>
    );
}