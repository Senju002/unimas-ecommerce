import Logo from "@/../../resources/images/applogo.png";

export default function ApplicationLogo({ className }) {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <img src={Logo} alt="logo" className="" />
        </div>
    );
}
