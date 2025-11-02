import { useId, type ChangeEvent } from "react";
import { Container, Input, Label } from "./styles";

type Props = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    type?: string;
    placeholder?: string;
    borderRadius?: 'sm' | 'md';
}

const TextInput = ({ value, onChange, label, type, placeholder, borderRadius = 'md'}: Props) => {
    const referenceId = useId();

    return (
        <Container>
            {label && <Label htmlFor={referenceId}>{label}</Label>}

            <Input type={type} id={referenceId} placeholder={placeholder} value={value} onChange={onChange} $borderRadius={borderRadius}/>
        </Container>
    )
}

export default TextInput;