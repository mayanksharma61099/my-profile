import style from "@/styles/content.module.css";
import ProjectContent from "./project-content";
import Image from "next/image";

export default function ProjectPage () {
    return (
        <div className='container'>
            <div className={`${style.mobile_margin} ${style.outline}`}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <Image src='/img/Profile_Image.jpg' alt='Profile Picture' width={350} height={500} />
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <ProjectContent />
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