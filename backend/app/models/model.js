// // const client = require("./db.js");


// const Url = function() {
//   this.name = "Url Shortster";
// }

// Url.getByUserName = async (Url, result) => {
//   try {    

//     // const res = await client.query(
//     //   "SELECT * FROM shorturl WHERE username = '" + Url.username + "'"
//     // );
    
//     result(null, "res");
//   } catch (err) {
//     result(err, null);
//   };
// };

// Url.getUrlByCode = async (Url, result) => {
//   try {    
//     const update = await client.query(
//       "UPDATE shorturl SET clicked = clicked + 1, updated = NOW() WHERE shortcode = '" + Url.shortcode + "'"
//     );

//     const res = await client.query(
//       "SELECT * FROM shorturl WHERE shortcode = '" + Url.shortcode + "'"
//     );
    
//     result(null, res);
//   } catch (err) {
//     result(err, null);
//   };
// };

// Url.getstats = async (Url, result) => {
//   try {    

//     const res = await client.query(
//       "SELECT * FROM shorturl WHERE shortcode = '" + Url.shortcode + "'"
//     );
    
//     result(null, res);
//   } catch (err) {
//     result(err, null);
//   };
// };

// Url.create = async (newUrl, result) => {
//   try {
//     const confirm = await client.query(
//       "SELECT * FROM shorturl WHERE shortcode = '" + newUrl.shortcode + "'"
//     );
    
//     if (confirm.rowCount != 0) {
//       result(null, { status: "repeat" });
//       return;
//     }

//     const max = await client.query('SELECT max(id) FROM shorturl');
//     let maxid = 1;
//     if (max.rowCount == 1) {
//       maxid = max.rows[0].max + 1;
//     }
    
//     const res = await client.query(
//       "INSERT INTO shorturl VALUES ('"+maxid+"', '"+newUrl.username+"', '"+newUrl.realurl+"', '"+newUrl.shortcode+"', '0', NOW(), NOW())"
//     );
    
//     result(null, { id: maxid, ...newUrl, status: "ok" });
//   } catch (err) {
//     result(err, null);
//   };
// };

// Url.remove = async (UrlId, result) => {
//   try {
//     const res = await client.query("DELETE FROM shorturl WHERE id = " + UrlId);

//     if (res.rowCount == 0) {
//       throw { kind: "not_found" };
//     }

//     result(null, { message: `'Url' was deleted successfully!` });
//   } catch (err) {
//     result(err, null);
//   }
// };


// module.exports = Url;




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Country
let Country = new Schema({

  country_name: {
    type: String
  },
  country_currency: {
    type: Number
  }
},{
    collection: 'country'
});

module.exports = mongoose.model('Country', Country);