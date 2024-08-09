import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    iconName: IconProp;
    size?: SizeProp;
    className?: string;
}

export const Icon = ({ iconName, size, className }: Props) => {
    return (
        <>
            <FontAwesomeIcon
                icon={iconName}
                size={size}
                className={className}
            />
        </>
    )
}


