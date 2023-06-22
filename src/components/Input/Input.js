import { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { RemoveModal } from "../Form/Form";
const Input = ({
    containerIndex,
    handleRemoveInputFromContainer,
    handleContainerInputChange,
    input,
    Mandatory,
    container,
    setAddable,
    placeholder,
    setCanAdd,
    inputIndex,
}) => {
    const [iconShow, setIconShow] = useState(false);
    useEffect(() => {
        container.inputs[inputIndex + 1] === undefined
            ? setAddable(true)
            : setAddable(false);
    }, []);
    return (
        <div className={styles.InputWrapper} key={inputIndex}>
            <input
                className={styles.Input}
                type="text"
                placeholder={placeholder}
                value={input.value}
                onChange={(e) => {
                    handleContainerInputChange(
                        containerIndex,
                        inputIndex,
                        e.target.value
                    );
                    if (e.target.value.length > 0) {
                        setAddable(true);
                        setCanAdd(true);
                    } else {
                        setAddable(false);
                        setCanAdd(false);
                    }
                }}
            />
            {Mandatory ? (
                ""
            ) : (
                <div className={styles.IconsWrapper}>
                    <RemoveModal
                        show={iconShow}
                        Cancle={() => {
                            setIconShow(false);
                        }}
                        Remove={() =>
                            handleRemoveInputFromContainer(
                                containerIndex,
                                inputIndex
                            )
                        }
                    />
                    <span className={styles.InputIcons}>
                        <svg
                            width="20"
                            height="20"
                            onClick={() => setIconShow(!iconShow)}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 10H15"
                                stroke="#D92D20"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Input;
