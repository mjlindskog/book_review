// const withAuth = (req, res, next) => {
//     if(!req.session.user_id) {
//         res.redirect('/login');
//     }else {
//         next();
//     }
// };

module.exports = {
    withAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
          return next()
        } else {
          res.redirect('/')
        }
    }
};