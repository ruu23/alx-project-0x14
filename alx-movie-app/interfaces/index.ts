export interface ComponentsProps {
    children : React.ReactNode
}

export interface ButtonProps{
    title: string;
    action?:() => void
}