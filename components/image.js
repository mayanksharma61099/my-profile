import Image from "next/image";

export default function ProfilePic () {
    return (
        <Image src='/img/Profile_Image.jpg' alt='Profile Picture' width={360} height={500} />
    );
}