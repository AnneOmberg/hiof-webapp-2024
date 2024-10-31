import { title } from "process"
"use client";

type TaskProps = {
    id: string
    title: string
}

export default function Task({ id, title }: TaskProps) {

    return (
        <article id="task">
            <h2>{title}</h2>
        </article>
    )
}