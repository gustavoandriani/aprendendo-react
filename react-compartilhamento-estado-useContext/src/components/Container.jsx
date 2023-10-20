import UserInfo from "./UserInfo";

export default function Container({ children }) {
 return (
    <div>
        <h3>Container App</h3>
        <UserInfo />
        {children}
    </div>
 )
}