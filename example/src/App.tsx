import React from 'react'

import TagsInput from 'react-simple-tags'
import 'react-simple-tags/dist/index.css'

const App = () => {
  const [tagsList, setTagsList] = React.useState<string[]>([])

  const handleTagAddition = (tag: string) => {
    const newTagsList = tagsList.concat(tag)
    setTagsList(newTagsList)
  }

  const handleTagRemoval = (tagToBeRemoved: string) => {
    const newTagsList = tagsList.filter((tag) => tag !== tagToBeRemoved)
    setTagsList(newTagsList)
  }

  return (
    <div>
      <h1>react-simple-tags</h1>
      <TagsInput
        className='custom-class'
        onTagAddition={handleTagAddition}
        onTagRemoval={handleTagRemoval}
      />
    </div>
  )
}

export default App
