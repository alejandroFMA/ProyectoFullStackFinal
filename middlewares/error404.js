
const error404 =  (req,res) => {
    res.status(404).json({
        msj:"404 not found", 
        img:"https://static.vecteezy.com/system/resources/thumbnails/023/152/240/original/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg"});
}

module.exports = error404