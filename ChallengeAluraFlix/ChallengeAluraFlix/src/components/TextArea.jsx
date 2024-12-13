function TextArea({ label, name, handleInputChange, value }) {
  return (
    <div className='flex flex-col bg-slate-600 rounded py-1 px-3'>
      <label className='text-sm' htmlFor=''>
        {label}
      </label>
      <textarea
        name={name}
        className='bg-transparent focus-visible:outline-none text-slate-100 resize-none'
        rows={5}
        type='text'
        value={value}
        onChange={handleInputChange}
        required
      />
    </div>
  )
}

export default TextArea
