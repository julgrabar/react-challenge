import { Card } from "components/card/Card";
import { cards } from "content";

export const CardCollection = ({items}) =>{
    return (
        items.map((item)=>(
            <Card
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            image  = {item.image}
            />
        ))
    )
}