declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module 'react-simple-tags' {
  export interface Props {
    minTagLength?: number
    uniqueTags?: boolean
    className?: string
    onTagAddition: (tag: string) => void
    onTagRemoval: (tag: string) => void
  }
}
