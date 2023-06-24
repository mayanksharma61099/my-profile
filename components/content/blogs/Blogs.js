import style from "@/styles/content.module.css";
import BlogsContent from "./blogs-content";
import ProfilePic from "@/components/image";

export default function BlogsPage () {
    return (
        <div className='container'>
            <div className={`${style.mobile_margin} ${style.outline}`}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row m-0'>
                            <div className= {`col-sm-4 ${style.profile_pic}`}> 
                                <ProfilePic />
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <BlogsContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}