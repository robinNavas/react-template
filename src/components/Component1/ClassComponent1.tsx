
import React from 'react';

//@ts-ignore
import styles from './ClassComponent1.module.scss'; //scoped style

interface MyProps {

}

export default class ClassComponent1 extends React.Component<MyProps>{
    constructor(props: MyProps) {
        super(props)
    }

    render() {
        return (
            <div className={styles.wrapper}>

            </div>
        )
    }

}
