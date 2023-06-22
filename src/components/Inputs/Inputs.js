import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./Inputs.module.css";
export default function Inputs({
    containerIndex,
    container,
    handleRemoveContainer,
    handleAddInputToContainer,
    handleContainerInputChange,
    containers,
    handleRemoveInputFromContainer,
}) {
    const [addable, setAddable] = useState(false);
    return (
        <>
            <div className={styles.InputsWrapper} key={containerIndex}>
                {container.inputs.map((input, inputIndex) => (
                    <Input
                        setAddable={setAddable}
                        Mandatory={inputIndex === 0 ? true : false}
                        containerIndex={containerIndex}
                        placeholder={
                            inputIndex === 0
                                ? "შესრულების ინდიკატორის სათაური"
                                : "აქტივობა"
                        }
                        handleRemoveInputFromContainer={
                            handleRemoveInputFromContainer
                        }
                        handleContainerInputChange={handleContainerInputChange}
                        input={input}
                        inputIndex={inputIndex}
                    />
                ))}
                <button
                    type="button"
                    className={styles.addInput}
                    onClick={() => {
                        if (addable) {
                            handleAddInputToContainer(containerIndex);
                        }
                    }}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.5 7H10.5"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7 10.5V3.5"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    აქტივობის დამატება
                </button>
            </div>
            {containers[containerIndex + 1] && (
                <div className={styles.FormIcons}>
                    <figure
                        className={styles.RemoveFromIcon}
                        onClick={() => handleRemoveContainer(containerIndex)}
                    >
                        <Minus />
                    </figure>
                </div>
            )}
        </>
    );
}

function Minus() {
    return (
        <svg
            width="20"
            height="20"
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
    );
}
