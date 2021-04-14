# react-simple-tags

A simple tags input component written in React.

[![NPM](https://img.shields.io/npm/v/react-simple-tags.svg)](https://www.npmjs.com/package/react-simple-tags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Features

- 🚀 Simple and lightweight (< 700 bytes when gzipped!)
- ✅ Easy to use
- 🎨 Customizable styles

## Install

```bash
npm install --save react-simple-tags
```

## Usage

```tsx
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
    <TagsInput
      className='my-custom-tags'
      onTagAddition={handleTagAddition}
      onTagRemoval={handleTagRemoval}
    />
  )
}

export default App
```

# Props

| Prop            | Type    | Required? | Default value |
| --------------- | ------- | --------- | ------------- |
| `maxTagLength`  | number  | no        | `3`           |
| `uniqueTags`    | boolean | no        | `true`        |
| `className`     | string  | no        | empty string  |
| `onTagAddition` | func    | yes       | N/A           |
| `onTagRemoval`  | func    | yes       | N/A           |

## License

MIT © [akkisagiraju](https://github.com/akkisagiraju)
