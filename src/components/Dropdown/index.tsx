import { useState } from "react"
import { Button } from "../Button"
import { DropdownItem, DropdownContent } from "../DropdownContainer"

interface DropdownProps {
  title: string,
  options: Array<string>
  onSelect: (option: string) => void
}

export const Dropdown = ({ title, options, onSelect }: DropdownProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleSelection = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div style={{ width: "100px" }}>
      <Button
        type="button"
        color="#3D2B3D"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </Button>

      {
        isOpen ? (
          <DropdownContent>
            {options.map((value, index) => {
              return (
                <DropdownItem
                  key={index}
                  onClick={() => handleSelection(value)}
                >
                  - {value}
                </DropdownItem>
              )
            })}
          </DropdownContent>
        ) : false
      }

    </div>
  )
}