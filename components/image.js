import Image from "next/image";
import style from "@/styles/content.module.css";

export default function ProfilePic () {

    return (
        <Image src='/img/Profile_Image.jpg' alt='Profile Picture' width={365} height={500} />
    );
}