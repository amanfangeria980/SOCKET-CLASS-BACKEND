const load=(req,res)=>{
    res.sendFile(__dirname.slice(0,-17)+"frontend/index.html")
}

module.exports={load};