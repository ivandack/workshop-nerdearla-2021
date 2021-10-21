const Item = ({ id, completed, title, onDestroy, onToggle }) => (
  <>
    <div className='view' onClick={() => onToggle(id, !completed)}>
      <input className='toggle' type='checkbox' checked={completed} />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onDestroy(id);
        }}
      />
    </div>
  </>
);

export default Item;
