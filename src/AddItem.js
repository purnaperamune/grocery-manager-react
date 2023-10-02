import { FaPlus } from 'react-icons/fa'

const AddItem = ({handleSubmit, newItem, setNewItem}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label>Add Items</label>
        <input
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem