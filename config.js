module.exports ={
    ENV:process.env.NODE_ENV || 'develop',
    PORT:process.env.PORT || 3000,
    URL:process.env.BASE_URL || 'http://localhost:3000',
    MONGOB_URI:process.env.MONGOB_URI || 'add yours here '
}