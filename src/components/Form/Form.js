"use client";
import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Inputs from "../Inputs/Inputs";

const Form = () => {
    const [containers, setContainers] = useState([{ inputs: [{ value: "" }] }]);
    const [canAdd, setCanAdd] = useState(false);
    const handleContainerInputChange = (containerIndex, inputIndex, value) => {
        const updatedContainers = [...containers];
        const container = updatedContainers[containerIndex];
        container.inputs[inputIndex] = { value };
        setContainers(updatedContainers);
    };

    const handleAddInputToContainer = (containerIndex) => {
        const updatedContainers = [...containers];
        const container = updatedContainers[containerIndex];
        container.inputs.push({ value: "" });
        setContainers(updatedContainers);
    };

    const handleRemoveInputFromContainer = (containerIndex, inputIndex) => {
        const updatedContainers = [...containers];
        const container = updatedContainers[containerIndex];
        container.inputs.splice(inputIndex, 1);
        setContainers(updatedContainers);
    };

    const handleAddContainer = () => {
        setContainers([...containers, { inputs: [{ value: "" }] }]);
    };

    const handleRemoveContainer = (containerIndex) => {
        const updatedContainers = [...containers];
        updatedContainers.splice(containerIndex, 1);
        setContainers(updatedContainers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Containers:", containers);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.Form}>
            {containers.map((container, containerIndex) => (
                <Inputs
                    containerIndex={containerIndex}
                    setCanAdd={setCanAdd}
                    container={container}
                    containers={containers}
                    handleRemoveContainer={handleRemoveContainer}
                    handleAddInputToContainer={handleAddInputToContainer}
                    handleContainerInputChange={handleContainerInputChange}
                    handleRemoveInputFromContainer={
                        handleRemoveInputFromContainer
                    }
                />
            ))}
            {containers.length === 1 ? (
                <div className={styles.FormIcons}>
                    <figure
                        className={styles.AddFromIcon}
                        onClick={() => {
                            if (
                                containers[containers.length - 1].inputs[
                                    containers[containers.length - 1].inputs
                                        .length - 1
                                ].value.length !== 0
                            ) {
                                canAdd ? handleAddContainer() : "";
                            }
                        }}
                    >
                        <Plus />
                    </figure>
                </div>
            ) : (
                <div className={styles.FormIcons}>
                    <figure
                        className={styles.RemoveFromIcon}
                        onClick={() =>
                            handleRemoveContainer(containers.length - 1)
                        }
                    >
                        <Minus />
                    </figure>
                    <figure
                        className={styles.AddFromIcon}
                        onClick={() => {
                            if (
                                containers[containers.length - 1].inputs[
                                    containers[containers.length - 1].inputs
                                        .length - 1
                                ].value.length !== 0
                            ) {
                                canAdd ? handleAddContainer() : "";
                            }
                        }}
                    >
                        <Plus />
                    </figure>
                </div>
            )}
            <button className={styles.Button} type="submit">
                დამატება
            </button>
        </form>
    );
};
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

function Plus() {
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
                stroke="#12B76A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10 15V5"
                stroke="#12B76A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export default Form;
