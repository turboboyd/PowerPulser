import { useSelector } from "react-redux";
import { selectAvatar } from "../redux/avatar/avatarSelectors";

const useAvatar = () => {
    const avatar = useSelector(selectAvatar);
    
    return {
        avatar
    };
};

export default useAvatar;