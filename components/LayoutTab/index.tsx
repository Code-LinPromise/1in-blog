"use client"

import React, {useState} from 'react';
import Tab from "./Tab"
import styles from "./style.module.scss"

const mockTab = [
    {
        icon: "朋友圈",
        title: "朋友圈",
        id: "1"
    },
    {
        icon: "朋友圈",
        title: "朋友圈",
        id: "2"
    },
    {
        icon: "朋友圈",
        title: "朋友圈",
        id: "3"
    },
    {
        icon: "朋友圈",
        title: "朋友圈",
        id: "4"
    },
]

function LayoutTab() {
    const [activeTab, setActiveTab] = useState("1")
    return (
        <div className={styles.wrapper}>
            <ul>
                {
                    mockTab.map((item) => {
                        return <li key={item.id}>
                            <Tab title={item.title} icon={item.icon}
                                 onClick={() => setActiveTab(item.id)}
                                 isActive={activeTab === item.id}
                            />
                        </li>
                    })
                }
            </ul>

        </div>
    );
}

export default LayoutTab;