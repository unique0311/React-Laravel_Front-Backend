
const CreateItem = () => {
    return (
      <div>
            <h1>Create An Item</h1>
            <form>
                  <div className = "row">
                        <div className = "col-md-6">
                              <div className = "form-group">
                                    <label>Item Name:</label>
                                    <input type = "text" className = "form-control" />
                              </div>
                        </div>
                  </div>
                  <div className = "form-group">
                        <button className = "btn btn-primary">Add Item</button>
                  </div>
            </form>
      </div>
    )
}

export default CreateItem;