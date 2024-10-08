import React, { ReactNode } from 'react'
import { Input } from '../Input/Input'
import './MultiSelect.scss'

type Props<Item> = {
  selectedItems: Item[]
  items: Item[]
  renderItem?: (item: Item) => ReactNode
  getItemKey?: (item: Item) => string
  onChange: (items: Item[]) => void
}

const cn = 'multi-select'

export function MultiSelect<Item>(props: Props<Item>) {
  const {
    items,
    renderItem = (item: any) => item + '',
    getItemKey = (item: any) => item + '',
    selectedItems,
    onChange,
  } = props
  return (
    <div className={cn}>
      {items.map((item) => (
        <label key={getItemKey(item)}>
          <Input
            type="checkbox"
            checked={selectedItems.some(
              (g2) => getItemKey(item) === getItemKey(g2)
            )}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...selectedItems, item])
              } else {
                onChange(
                  selectedItems.filter(
                    (g2) => getItemKey(item) !== getItemKey(g2)
                  )
                )
              }
            }}
          />
          {renderItem(item)}
        </label>
      ))}
    </div>
  )
}
