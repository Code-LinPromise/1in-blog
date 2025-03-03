"use client"

import React, {ReactNode} from 'react';
import styles from "./style.module.scss"

type Props = {
    icon: ReactNode,
    title: string,
    isActive: boolean,
    onClick: () => void,
}

function Tab(props: Props) {
    const {icon, title, isActive, onClick} = props
    const active = isActive ? styles.active : ""
    return (
        <div className={[styles.wrapper, active].join(" ")} onClick={() => {
            onClick()
        }}>
            {icon}
            <span>{title}</span>
        </div>
    );
}

export default Tab;