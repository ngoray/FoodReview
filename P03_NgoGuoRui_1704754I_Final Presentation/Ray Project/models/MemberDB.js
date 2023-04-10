var db = require('../dbconnection');

class MemberDB{

    registerUser(signup, callback){

        console.log("Username: "+ signup.username);
        console.log("Password: "+signup.password);
        console.log("Email: " + signup.email);
        var sql = "INSERT INTO beststandard.signup (username, password, email) VALUES (?, ?, ?)";
        
        db.query(sql, [signup.username,signup.password, signup.email], callback);
    }
    loginUser(signup, callback){
        var sql = "SELECT * FROM signup WHERE username = ? AND password = ?"

        db.query(sql, [signup.username, signup.password], callback);
    }

    updateUser(signup, callback){
        var sql = "UPDATE signup SET username = ?, email = ?, password = ? WHERE _id = ?";
        return db.query(sql, [signup.username, signup.email, signup.password, signup._id], callback);
    }

    deleteUser(_id, callback) {
        var sql = "DELETE FROM signup WHERE _id = ?";

        return db.query(sql, [_id], callback);
    }

    getAllUsers(callback) {
        var sql = "SELECT * FROM beststandard.signup";
        return db.query(sql, callback);
    }
}
module.exports = MemberDB;