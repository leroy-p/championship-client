interface IProps {
  message: string
}

export default function Simple({ message }: IProps) {
  return <p className="message">{message}</p>
}
