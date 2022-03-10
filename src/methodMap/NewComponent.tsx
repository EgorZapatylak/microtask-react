type topCarsType = {
    manufacturer: string,
    model: string
}

type NewComponentType = {
    topCars: Array<topCarsType>
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <table>
            <tr>
                <th>№</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.topCars.map((el,index) => {
                return (
                    <tr>
                        <th key={index}>{index + 1}</th>
                        <th>{el.manufacturer}</th>
                        <th>{el.model}</th>
                    </tr>
                )
            })}
        </table>
    )
}