import style from '@/styles/content.module.css'
import Cards from './cards';

export default function ProjectContent () {

    const Portfolio = [
        '•	A website containing all my with highly responsive UI. User can have all the details about my skills, experience and Education, my personal projects, blogs, achievements, and how to contact me.',
        'Technology Used: React js, Next js'
    ];

    const Ayurvedajya = [
        'A highly enriched medical website is connected to a backed application architecture which creates a special combination to process the workflow of a clinic efficiently and provides assistance in Backend Data Processing.',
        'Technology Used: HTML, CSS, JavaScript, PHP, MySQL, Bootstrap'
    ];

    const CRM = [
        'CRM is developed for End User having various features to maintain a track record and escalation matrix for technical sales of software for Scalability of a fast-paced business environment.        ',
        'Technology Used: HTML, CSS, JavaScript, jQuery, PHP, MySQL, Bootstrap'
    ];

    const Boutique = [
        'A high-end application developed with secure and scalable UI, using Java and MySQL to support and maintain boutique storage and warehouse data.',
        'Technology Used: Java, MySQL'
    ];

    const Facial = [
        'A small AI matrix to recognize facial pattern, weather you are smiling or not',
        'Technology Used: Python, Machine Learning, Deep Learning'
    ];

    const Instagram = [
        'A matrix to automate the instagram to like and replying to a comment with set of messages by scanning the positives and negatives comments',
        'Technology Used: Python, Selenium, Machine Learning, NLP'
    ];

    return (
        <div>
            <div id='Home' className={`tab-pane active ${style.fade_in}`}>
                <h1 className={style.project_title}>Projects</h1>
                <br />
                <Cards title='PORTFOLIO WEBSITE' details = {Ayurvedajya} link='https://main.dxcfbwiclh4mm.amplifyapp.com/'
                tech='web' /><br/>
                <Cards title='AYURVEDA CLINIC WEBSITE + WEB APPLICATION' details = {Ayurvedajya} link='https://ayurvedajya.com'
                tech='web' /><br/>
                <Cards title='CUSTOMER RELATION MANAGEMENT' details = {CRM} /><br />
                <Cards title='BOUTIQUE MANAGEMENT SYSTEM' details = {Boutique} /><br />
                <Cards title='FACIAL RECOGNITION TOOL' details = {Facial} link='https://github.com/mayanksharma61099/Face-Recognition'
                tech='web' /><br />
                <Cards title='INSTAGRAM AUTOMATION TOOL' details = {Instagram} /><br />
            </div>
        </div>
    );
}