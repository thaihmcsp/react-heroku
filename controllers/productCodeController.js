const Service = require('../services/productCodeServices')

exports.getAllCode = async function (req,res){
  try {
    const data = await Service.findAllCode()
    const newArr = data.map((ele)=>{
      return {...ele._doc, key:ele._id}
    })
    res.status(200).json(newArr)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.createCode = async (req,res)=>{
  try {
    const code = await Service.findOneCode(req.body.code)
    if(!code){
      await Service.createNewCode({
        code: req.body.code,
        name: req.body.name,
      }) 
      res.status(200).json({mess:'CREATE SUCCESS'})
    }else{
      res.status(400).json({mess:'CODE EXISTED'})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.deleteCode = async(req,res)=>{
  try {
    await Service.deleteOneById(req.params.id)
    res.status(200).json({mess:'DELETE SUCCESS'})
  } catch (error) {
    res.status(500).json(error)
  }
}