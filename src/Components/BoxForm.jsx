import { useState } from "react";
import { Form, Label, Input, Button } from "./StyledComponent";
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [dimencion, setDimencion] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*setemos nuevo mensaja que se guardara en app.jsx*/
        props.onNewBox(color, dimencion);
        setDimencion("");
        setColor("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Color</Label>
            <Input
                onChange={(e) => setColor(e.target.value)}
                value={color}
            ></Input>
            <Label>Dimenciones</Label>
            <Input
                onChange={(e) => setDimencion(e.target.value)}
                value={dimencion}
            ></Input>
            <Button type="submit">Add</Button>
        </Form>
    );
};

export default BoxForm;
