export const buildClassName = (className: string, componentClassName: string) => {
  return (className ? className : "") + " " + componentClassName
}