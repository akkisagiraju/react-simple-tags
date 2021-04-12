import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  minTagLength?: number
}

const TagsInput: React.FC<Props> = ({ minTagLength = 3 }) => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const [tagsList, setTagsList] = React.useState<string[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === ',' || event.target.value === ';') {
      setInputValue('')
      return
    }
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.length < minTagLength) {
      return
    }
    if (event.key === ',' || event.key === ';') {
      const newTagsList = [...tagsList, inputValue.trim()]
      setTagsList(newTagsList)
      setInputValue('')
    }
  }

  const removeTag = (tagToBeRemoved: string) => {
    const newTagsList = tagsList.filter((tag) => tag !== tagToBeRemoved)
    setTagsList(newTagsList)
  }

  return (
    <div className={styles['react-simple-tags']}>
      {tagsList.map((tag) => (
        <span key={`${tag}-${Math.random() * Math.random()}`}>
          {tag}{' '}
          <a onClick={() => removeTag(tag)} aria-label='remove tag'>
            &#x2715;
          </a>
        </span>
      ))}
      <input
        type='text'
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event)
        }
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(event)
        }
      />
    </div>
  )
}

export default TagsInput
