import styles from "./Input.module.css";
const Input = ({
    containerIndex,
    handleRemoveInputFromContainer,
    handleContainerInputChange,
    input,
    Mandatory,
    setAddable,
    placeholder,
    inputIndex,
}) => {
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
                    e.target.value.length > 0
                        ? setAddable(true)
                        : setAddable(false);
                }}
            />
            {Mandatory ? (
                ""
            ) : (
                <span className={styles.InputIcons}>
                    <svg
                        width="20"
                        height="20"
                        onClick={() =>
                            handleRemoveInputFromContainer(
                                containerIndex,
                                inputIndex
                            )
                        }
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
            )}
        </div>
    );
};

export default Input;
