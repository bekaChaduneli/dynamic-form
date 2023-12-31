import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./Inputs.module.css";
import { RemoveModal } from "../Form/Form";
export default function Inputs({
    containerIndex,
    container,
    handleRemoveContainer,
    submitted,
    handleAddInputToContainer,
    setCanAdd,
    handleContainerInputChange,
    containers,
    handleRemoveInputFromContainer,
}) {
    const [addable, setAddable] = useState(false);
    const [iconShow, setIconShow] = useState(false);
    return (
        <>
            <div className={styles.InputsWrapper}>
                {container.inputs.map((input, inputIndex) => (
                    <Input
                        submitted={submitted}
                        setCanAdd={setCanAdd}
                        key={inputIndex}
                        setAddable={setAddable}
                        Mandatory={inputIndex === 0 ? true : false}
                        container={container}
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
                            container.inputs[container.inputs.length - 1].value
                                .length !== 0
                                ? handleAddInputToContainer(containerIndex)
                                : "";
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
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 10.5V3.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    აქტივობის დამატება
                </button>
            </div>
            {containers[containerIndex + 1] && (
                <div className={styles.FormIcons}>
                    <figure
                        className={styles.RemoveFromIcon}
                        onClick={() => setIconShow(!iconShow)}
                    >
                        <RemoveModal
                            show={iconShow}
                            Cancle={() => {
                                setIconShow(false);
                            }}
                            Remove={() => handleRemoveContainer(containerIndex)}
                        />
                        <Minus />
                        {/* <Minus /> */}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
