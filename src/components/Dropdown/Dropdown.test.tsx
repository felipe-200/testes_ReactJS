import { Dropdown } from './index'
import { render, screen, userEvent } from '../../utils/test.utils'

const title = "Dropdown"
const options = ['Item1', 'Item2', 'Item3']

describe('Dropdown', () => {

  it('Should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => { }} />)

    expect(screen.queryByText(options[0])).not.toBeInTheDocument()
    expect(screen.queryByText(options[1])).not.toBeInTheDocument()
    expect(screen.queryByText(options[2])).not.toBeInTheDocument()

  })

  it('Should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => { }} />)

    expect(screen.queryByText(options[0])).not.toBeInTheDocument()
    expect(screen.queryByText(options[1])).not.toBeInTheDocument()
    expect(screen.queryByText(options[2])).not.toBeInTheDocument()

    const dropdownButton = screen.getByRole('button', { name: title })

    userEvent.click(dropdownButton)

    expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument()
  })

  it('Should show name item selected and close dropdown', () => {
    const onSelect = jest.fn()
    render(<Dropdown title={title} options={options} onSelect={onSelect} />)

    // expect(screen.queryByText(options[0])).not.toBeInTheDocument()
    // expect(screen.queryByText(options[1])).not.toBeInTheDocument()
    // expect(screen.queryByText(options[2])).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: title }))

    const option0 = screen.getByRole('menuitem', { name: options[0] })
    const option1 = screen.getByRole('menuitem', { name: options[1] })
    const option2 = screen.getByRole('menuitem', { name: options[2] })


    expect(option0).toBeInTheDocument()
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()

    userEvent.click(option0)

    expect(onSelect).toHaveBeenCalledWith(options[0])

    expect(screen.queryByText(options[0])).not.toBeInTheDocument()
    expect(screen.queryByText(options[1])).not.toBeInTheDocument()
    expect(screen.queryByText(options[2])).not.toBeInTheDocument()



  })

})