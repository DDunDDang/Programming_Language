export const ColoredMassage = (props) => {
  // Props 분할 대입
  const { color, children } = props;

    const contentStyle = {
      color: color,
      fontSize: "20px"
    }

    return <p style={contentStyle}>{children}</p>
}