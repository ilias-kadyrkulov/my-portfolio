import './List.scss'

type ListType = {
    body: string
}
type Props = {
    list: ListType[]
}

const List = (props: Props) => {
    return (
        <ul>
            {props.list.map((e, index) => (
                <li key={index}>{e.body}</li>
            ))}
        </ul>
    )
}

export default List
