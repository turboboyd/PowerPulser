import { useSelector } from "react-redux";
import { selectAvatar } from "../redux/avatar/avatarSelectors";

export const useAvatar = () => {
    const avatar = useSelector(selectAvatar);
    
    return {
        avatar
    };
};