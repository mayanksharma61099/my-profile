import style from '@/styles/content.module.css'
import BlogsCards from './blogs-card';

export default function BlogsContent () {
    return (
        <div>
            <div id='Home' className={`tab-pane active ${style.fade_in}`}>
                <h1 className={style.project_title}>Blogs</h1>
                <br />
                <BlogsCards title='What is experience?' blog_page = 'https://www.linkedin.com/posts/mayank-sharma-ab9784121_experience-career-linkedin-activity-7114620009519136768-F5Wq?utm_source=share&utm_medium=member_desktop' /><br />
                <BlogsCards title='What is more important, More Salary or More Experience?' blog_page = 'https://www.linkedin.com/posts/mayank-sharma-ab9784121_motivational-experience-salary-activity-7112635125611311104-5gkI?utm_source=share&utm_medium=member_desktop' /><br />
                <BlogsCards title='Chat GPT is a powerful tool' blog_page = 'https://www.linkedin.com/posts/mayank-sharma-ab9784121_chatgpt-marketing-linkedin-activity-7058865891504979968-oKAX?utm_source=share&utm_medium=member_desktop' /><br />
                <BlogsCards title='Interviews are not exams!!' blog_page ='https://www.linkedin.com/posts/mayank-sharma-ab9784121_thoughtworks-corporate-people-activity-7031253993007828992-3Y76?utm_source=share&utm_medium=member_desktop' /><br />
                <BlogsCards title="Don't be afraid to ask stupid questions in front of client." blog_page='https://www.linkedin.com/posts/mayank-sharma-ab9784121_fresher-softwareengineer-softwaredeveloper-activity-6989427254648844288-T8pf?utm_source=share&utm_medium=member_desktop' /><br/>
            </div>
        </div>
    );
}