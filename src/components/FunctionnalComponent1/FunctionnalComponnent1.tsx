
import React from 'react';

// Todo implement a tool to add declaration of types on the fly
// like typings-for-css-modules-loader
// @ts-ignore
import styles from './FunctionnalComponent1.module.scss';

export default function Hi(props) {

    return (
        <div className={styles.wrapper}>
            hello {props.name}, I am the first functionnal component
        </div>
    )
}
