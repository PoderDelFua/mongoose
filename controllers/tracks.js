const getItems = (req, res) => {
    const data = ["hola", "mundo"]
    res.send({data})
   }
   
   const getItem = (req, res) => {
    const { id } = req.params
    const data = ["hola", "mundo", "getItem", id]
    res.send({data})
   }
   const createItem = (req, res) => {
    //todo
    }
   const updateItem = (req, res) => {
    //todo
   }
   const deleteItem = (req, res) => {
    //todo
   }

   module.exports = { getItems, getItem,
   createItem, updateItem,
   deleteItem };
   